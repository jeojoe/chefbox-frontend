const menus = [{
  slug: 'chicken-hamburger',
  name_th: 'แฮมเบอร์เกอร์ไก่แบบญี่ปุ่น',
  name_en: '',
  price: 230,
  servings: 2,
  time: '30-45 นาที',
  spicy: 'ไม่เผ็ด',
  difficulty: 'ปานกลาง',
}];

function attachId(dataArray) {
  return dataArray.map((d, i) => ({ id: i, ...d }));
}

export function getMenus() {
  return attachId(menus);
}
