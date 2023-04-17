(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();


console.log(`1. на всё со всеми 4000; 2. давайте подумаем риски в плане того, что назначат экспертизу, пока она будет делаться, измениться докладчик и будет беда. Есть возможность проговорить эти моменты, как себе представляют эту ситуацию, времена не спокойные или ваше мнение`)