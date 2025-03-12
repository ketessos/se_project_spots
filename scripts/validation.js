const showInputError = (formEl, inputEl, errorMsg) => {
    const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
    errorMsgEl.textContent = errorMsg;
    errorMsgEl.style.display = 'block';
    inputEl.classList.add("modal__input_state_error");
};

const hideInputError = (formEl, inputEl) => {
    const errorMsgEl = document.querySelector(`#${inputEl.id}-error`);
    errorMsgEl.textContent = "";
    errorMsgEl.style.display = 'none';
    inputEl.classList.remove("modal__input_state_error");
};

const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, inputEl.validationMessage);
    } else {
        hideInputError (formEl, inputEl);
    }
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonEl) => {
    if (hasInvalidInput(inputList)) {

    };
  };


  const setEventListeners = (formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
    const buttonElement = formEl.querySelector(".modal__button");

    // TODO - handle initial states
    //toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formEl, inputElement);
            //toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = document.querySelectorAll(".modal__form");
    formList.forEach((formEl) => {
        setEventListeners(formEl);
    });
};

enableValidation();