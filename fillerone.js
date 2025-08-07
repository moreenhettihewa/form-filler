
function fillFirstForm() {
  const data = {
    txtDoc: "1",
  };

  const selects = {
    ddlApplicant: "1",
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
};

fillFirstForm();
