const defaultOptions = {
  Notebooks: {
    title: [{ checked: false, name: "ThinkPad" }, { checked: false, name: "Lenovo" }],
    memory: [
      { checked: false, name: "32" },
      { checked: false, name: "16" },
      { checked: false, name: "8" }
    ],
    price: { min: 0, max: 150000 }
  },
  Mobile: {
    title: [
      { checked: false, name: "HUAWEI" },
      { checked: false, name: "Asus" },
      { checked: false, name: "SAMSUNG " }
    ],
    memory: [
      { checked: false, name: "128" },
      { checked: false, name: "64" },
      { checked: false, name: "32" }
    ],
    price: { min: 0, max: 150000 }
  },
  PCs: {
    title: [{ checked: false, name: "AMD" }, { checked: false, name: "intel" }],
    memory: [
      { checked: false, name: "32" },
      { checked: false, name: "16" },
      { checked: false, name: "8" }
    ],
    price: { min: 0, max: 150000 }
  }
};

export default defaultOptions;
