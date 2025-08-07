(function fillForm() {
  const data = {
    txtFirstName1: "Doe",
    txtLastName1: "Jane",
    txtDOB1: "1990-06-27",
    txtPassportNo1: "N1234567",
    txtDOE1: "2030-09-10",
    txtContactNo1: "760034545",
    txtSecondaryPhone1: "771234567",
    txtNationalId1: "903453333V",
    txtBirthPlace1: "city",
    txtAddress1: "house no, street name, city",
  };

  const selects = {
    ddlGender1: "Female", // Female or Male
    ddlNationality1: "200", // for sri lanka
    ddlBirthCountry1: "200",
    ddlMaritalSts1: "2", // 1 for single 2 for married
    ddlDelegate1: "1",
  };

  for (const id in data) {
    const input = document.getElementById(id);
    if (input) {
      input.value = data[id];
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }

  for (const id in selects) {
    const select = document.getElementById(id);
    if (select) {
      const value = selects[id];
      const option = Array.from(select.options).find(
        (opt) => opt.value === value || opt.text.trim() === value
      );
      if (option) {
        select.value = option.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  }

  const checks = ["chk1_2"];

  for (const i = 0 ; i< checks.length ; i++) {
    const checkbox = document.getElementById(checks[i]);
    if (checkbox) {
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event("change", { bubbles: true })); // trigger change event
    }
  }
})();
