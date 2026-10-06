import { contact } from '../content';
import { PRIVACY_UPDATED_ON } from '../privacy';

export function PrivacyPolicy() {
  const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent('Solicitação sobre dados pessoais')}`;

  return (
    <article className="bd-policy">
      <p className="bd-policy-date">Atualizada em {PRIVACY_UPDATED_ON}</p>
      <p>Esta política explica a navegação neste site e o primeiro contato com Bruna Dantas. O tratamento de informações de clientes durante a prestação de serviços jurídicos será informado no contexto do atendimento e da contratação.</p>

      <section>
        <h3>Quem é responsável pelos dados?</h3>
        <p>Bruna Dantas, advogada, {contact.registration}, é responsável pelo uso dos dados recebidos para o atendimento inicial. Para assuntos de privacidade, escreva para <a href={emailHref}>{contact.email}</a> ou entre em contato pelo WhatsApp {contact.phone}.</p>
      </section>

      <section>
        <h3>Quais dados são usados e para quê?</h3>
        <ul>
          <li><strong>Nome:</strong> identificar você no atendimento.</li>
          <li><strong>Mensagem:</strong> compreender o assunto geral e responder à sua solicitação.</li>
          <li><strong>E-mail e telefone, quando informados:</strong> permitir retorno por outros canais e combinar um atendimento. Esses campos são opcionais.</li>
        </ul>
        <p>Informe apenas o necessário para o primeiro contato. Documentos, dados de saúde, CPF e informações detalhadas sobre terceiros devem ser tratados pelo canal adequado, durante o atendimento.</p>
        <p>Quando o contato estiver relacionado à avaliação ou ao início de uma prestação de serviços a seu pedido, o tratamento necessário se apoia nos procedimentos preliminares à contratação, previstos no art. 7º, V, da LGPD. O formulário não inscreve você em uma lista de publicidade.</p>
      </section>

      <section>
        <h3>Como funciona o formulário?</h3>
        <p>Os campos são preenchidos no seu navegador. O site não possui um banco de dados de mensagens e não salva o conteúdo do formulário em seu armazenamento local.</p>
        <p>Ao clicar em “Continuar no WhatsApp”, os dados preenchidos são incluídos em um link que abre o WhatsApp para preparar a mensagem. Nesse momento, você acessa um serviço da Meta. Revise o texto e confirme o envio no próprio WhatsApp. Você também pode entrar em contato diretamente pelos canais apresentados no site.</p>
      </section>

      <section>
        <h3>Serviços externos e registros de acesso</h3>
        <p>Ao abrir o WhatsApp ou o Instagram, ou enviar um e-mail, você passa a utilizar os respectivos serviços externos, que têm regras próprias de privacidade e podem processar dados fora do Brasil. A política do <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">WhatsApp</a> explica o tratamento realizado por esse serviço.</p>
        <p>A hospedagem deste site no Vercel pode gerar registros técnicos de acesso, como endereço IP, data, horário e informações do navegador, para operar e proteger o serviço. Consulte também o <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">aviso de privacidade do Vercel</a>. As fontes e as imagens desta versão são carregadas pelo próprio site.</p>
      </section>

      <section>
        <h3>Cookies e armazenamento no navegador</h3>
        <p>Esta versão não instala cookies de análise de visitas ou publicidade e não incorpora ferramentas de rastreamento. Os links para redes sociais só abrem os serviços quando você os aciona.</p>
        <p>Ao escolher “Usar somente necessários”, salvamos apenas essa preferência e suas datas no armazenamento local do navegador. Ela tem validade de 180 dias; depois disso, o registro é apagado na próxima visita e você faz uma nova escolha. Esse registro não inclui nome, contato ou mensagem e não é enviado ao servidor. Você pode apagá-lo pelo painel “Cookies e privacidade” do rodapé ou pelas configurações do navegador.</p>
        <p>Se forem acrescentadas ferramentas opcionais no futuro, as finalidades e escolhas serão apresentadas antes de sua ativação, quando dependerem de consentimento.</p>
      </section>

      <section>
        <h3>Por quanto tempo os dados ficam guardados?</h3>
        <p>O site não mantém um cadastro com o conteúdo do formulário. A preferência de privacidade expira após 180 dias. Registros técnicos da hospedagem seguem as condições do prestador.</p>
        <p>Mensagens enviadas pelos canais de atendimento podem ser mantidas enquanto necessárias para responder à solicitação, acompanhar uma eventual contratação, cumprir obrigações legais ou exercer direitos. O prazo aplicável depende do assunto e das obrigações profissionais; você pode solicitar esclarecimentos ou a eliminação dos dados pelo e-mail de privacidade.</p>
      </section>

      <section>
        <h3>Como exercer seus direitos?</h3>
        <p>Você pode solicitar confirmação do tratamento, acesso, correção e informações sobre compartilhamento, além de anonimização, bloqueio, eliminação e portabilidade, quando cabíveis. Também pode se opor a tratamentos em desacordo com a LGPD e revogar um consentimento eventualmente fornecido. Algumas informações precisam ser mantidas quando houver fundamento legal para isso.</p>
        <p>Envie sua solicitação para <a href={emailHref}>{contact.email}</a>. Se necessário, serão pedidas apenas informações suficientes para confirmar sua identidade e proteger os dados. Alterações nesta política serão acompanhadas de uma nova data de atualização.</p>
      </section>
    </article>
  );
}
