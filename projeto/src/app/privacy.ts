export const PRIVACY_PREFERENCE_KEY = 'bd.privacy.preference';
export const PRIVACY_PREFERENCE_VERSION = 1;
export const PRIVACY_PREFERENCE_DURATION = 180 * 24 * 60 * 60 * 1000;
export const PRIVACY_UPDATED_ON = '6 de outubro de 2026';

export type PrivacyStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
export type PrivacyPreference = {
  version: number;
  choice: 'necessary-only';
  savedAt: number;
  expiresAt: number;
};

function browserStorage(): PrivacyStorage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage;
  } catch {
    return null;
  }
}

export function readPrivacyPreference(storage = browserStorage(), now = Date.now()): PrivacyPreference | null {
  try {
    const value = storage?.getItem(PRIVACY_PREFERENCE_KEY);
    if (!value) return null;
    const preference = JSON.parse(value);
    if (
      !preference ||
      preference.version !== PRIVACY_PREFERENCE_VERSION ||
      preference.choice !== 'necessary-only' ||
      !Number.isFinite(preference.savedAt) ||
      !Number.isFinite(preference.expiresAt) ||
      preference.savedAt > now ||
      preference.expiresAt <= now ||
      preference.expiresAt - preference.savedAt !== PRIVACY_PREFERENCE_DURATION
    ) {
      storage?.removeItem(PRIVACY_PREFERENCE_KEY);
      return null;
    }
    return {
      version: preference.version,
      choice: preference.choice,
      savedAt: preference.savedAt,
      expiresAt: preference.expiresAt,
    };
  } catch {
    return null;
  }
}

export function saveNecessaryPreference(storage = browserStorage(), now = Date.now()): boolean {
  try {
    if (!storage) return false;
    storage.setItem(PRIVACY_PREFERENCE_KEY, JSON.stringify({
      version: PRIVACY_PREFERENCE_VERSION,
      choice: 'necessary-only',
      savedAt: now,
      expiresAt: now + PRIVACY_PREFERENCE_DURATION,
    }));
    return true;
  } catch {
    return false;
  }
}

export function clearPrivacyPreference(storage = browserStorage()): boolean {
  try {
    if (!storage) return false;
    storage.removeItem(PRIVACY_PREFERENCE_KEY);
    return true;
  } catch {
    return false;
  }
}
