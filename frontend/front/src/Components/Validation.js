export default function Validation(values) {
    console.log('hello');
    let errors = {};
  
    // Company name validation (must not be empty and alphabetic only)
    if (!values.nom) {
      errors.nom = "Company name is required";
    } else if (!/^[A-Za-z\s]+$/.test(values.nom)) {
      errors.nom = "Company name must contain only alphabetic characters";
    }
    console.log(errors.nom);
    // Emailc validation (must not be empty and follow email pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.emailc) {
      errors.emailc = "Email is required";
    } else if (!emailPattern.test(values.emailc)) {
      errors.emailc = "Invalid email address";
    }
    console.log(errors.email);
  
    // Phone number validation (must not be empty and exactly 8 digits)
    if (!values.numt) {
      errors.numt = "Phone number is required";
    } else if (!/^\d{8}$/.test(values.numt)) {
      errors.numt = "Phone number must be exactly 8 digits";
    }
  
    // RSSI validation (must not be empty)
    if (!values.rssi) {
      errors.rssi = "RSSI is required";
    }
  
    // Emailr validation (must not be empty and follow email pattern)
    if (!values.emailr) {
      errors.emailr = "Email is required";
    } else if (!emailPattern.test(values.emailr)) {
      errors.emailr = "Invalid email address";
    }
  
    // Auditor name validation (must not be empty and alphabetic only)
    if (!values.auditor) {
      errors.auditor = "Auditor name is required";
    } else if (!/^[A-Za-z\s]+$/.test(values.auditor)) {
      errors.auditor = "Auditor name must contain only alphabetic characters";
    }
  
    // Norme validation (must not be empty and between 1 and 5)
    if (!values.norme) {
      errors.norme = "Norme is required";
    } else if (values.norme < 1 || values.norme > 5) {
      errors.norme = "Norme should be a number between 1 and 5";
    }
  
    // Date validation (must not be empty and a past date)
    const today = new Date();
    const selectedDate = new Date(values.date);
    if (!values.date) {
      errors.date = "Audit date is required";
    } else if (selectedDate >= today) {
      errors.date = "Audit date must be a past date";
    }

  
    return errors;
  }
  