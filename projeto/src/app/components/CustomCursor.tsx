import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '60px' : '40px',
          height: isPointer ? '60px' : '40px',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      >
        <div
          className="size-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(52, 254, 254, 0.4) 0%, rgba(52, 254, 254, 0.1) 40%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>
      <div
        className="pointer-events-none fixed z-[10000]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="size-full rounded-full bg-[#34FEFE]" />
      </div>
    </>
  );
}
