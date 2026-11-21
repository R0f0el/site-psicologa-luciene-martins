/* Luciene Martins — Psicóloga · scripts do site (sem dependências) */
(function () {
  'use strict';

  // Número oficial do WhatsApp (DDI + DDD + número, só dígitos)
  var WHATSAPP = '5511984049855';
  var MSG_PADRAO = 'Olá, Luciene! Gostaria de agendar uma sessão.';

  function waLink(text) {
    return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text || MSG_PADRAO);
  }

  // Todos os links marcados com data-wa recebem a mensagem pré-preenchida
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = waLink();
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // Menu mobile
  var toggle = document.querySelector('.nav__toggle');
  var nav = document.getElementById('menu');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
      }
    });
  }

  // FAQ: mantém só um item aberto por vez
  var faqs = document.querySelectorAll('.faq__item');
  faqs.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) faqs.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  // Formulário de contato
  var form = document.getElementById('contato-form');
  var success = document.getElementById('form-sucesso');
  if (!form) return;

  var COPY = {
    nome: 'Diga como podemos te chamar.',
    whatsapp: 'Confira o número com DDD, por exemplo (11) 91234-5678.',
    lgpd: 'Para enviarmos, marque a autorização acima.',
    falha: 'Não conseguimos enviar agora. Tente de novo ou fale direto pelo WhatsApp.'
  };

  // Máscara simples (11) 91234-5678
  var tel = form.whatsapp;
  tel.addEventListener('input', function () {
    var d = tel.value.replace(/\D/g, '').slice(0, 11);
    var out = d;
    if (d.length > 2) out = '(' + d.slice(0, 2) + ') ' + d.slice(2);
    if (d.length > 7) out = '(' + d.slice(0, 2) + ') ' + d.slice(2, d.length - 4) + '-' + d.slice(-4);
    tel.value = out;
  });

  function setError(field, msg) {
    var el = document.getElementById(field + '-erro');
    if (el) el.textContent = msg || '';
    var input = form[field];
    if (input && input.setAttribute) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }

  function validate() {
    var ok = true;
    var nome = form.nome.value.trim();
    var digits = form.whatsapp.value.replace(/\D/g, '');
    setError('nome', nome.length < 2 ? COPY.nome : '');
    setError('whatsapp', (digits.length < 10 || digits.length > 11) ? COPY.whatsapp : '');
    setError('lgpd', !form.lgpd.checked ? COPY.lgpd : '');
    if (nome.length < 2 || digits.length < 10 || digits.length > 11 || !form.lgpd.checked) ok = false;
    return ok;
  }

  function showSuccess() {
    form.hidden = true;
    success.hidden = false;
    success.focus && success.setAttribute('tabindex', '-1');
    success.focus && success.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) {
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    var data = {
      nome: form.nome.value.trim(),
      whatsapp: form.whatsapp.value.trim(),
      modalidade: form.modalidade.value,
      mensagem: form.mensagem.value.trim()
    };
    var endpoint = form.getAttribute('data-endpoint');

    if (endpoint) {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        showSuccess();
      }).catch(function () {
        setError('lgpd', COPY.falha);
      });
      return;
    }

    // Sem endpoint configurado: monta a mensagem e abre o WhatsApp
    var texto = 'Olá, Luciene! Gostaria de agendar uma sessão.\n\n' +
      'Nome: ' + data.nome + '\n' +
      'WhatsApp: ' + data.whatsapp + '\n' +
      'Modalidade: ' + data.modalidade +
      (data.mensagem ? '\nMensagem: ' + data.mensagem : '');
    window.open(waLink(texto), '_blank', 'noopener');
    showSuccess();
  });

  document.getElementById('form-reset').addEventListener('click', function () {
    form.reset();
    ['nome', 'whatsapp', 'lgpd'].forEach(function (f) { setError(f, ''); });
    success.hidden = true;
    form.hidden = false;
    form.nome.focus();
  });
})();
