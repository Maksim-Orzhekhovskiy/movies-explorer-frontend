import { useCallback, useState, useRef } from "react";

function useFormWithValidation(initialvalue = {}) {
  const [values, setValues] = useState(initialvalue);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const initialState = useRef(initialvalue);

  const handleChange = useCallback((event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: target.validationMessage }));
    setIsValid(target.closest("form").checkValidity());
  }, []);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    initialState,
  };
}

export default useFormWithValidation;
