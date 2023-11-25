const items = 
    [
    { id: "main001", name: "ข้าวขาหมู", foodType: "main", calories: 400, image: "/items/main001.webp" },
    { id: "main002", name: "ขนมจีนน้ำยากะทิ", foodType: "main", calories: 250, image: "/items/main002.webp" },
    { id: "main004", name: "ข้าวคลุกกะปิ", foodType: "main", calories: 450, image: "/items/main004.webp" },
    { id: "main005", name: "ข้าวไข่เจียว", foodType: "main", calories: 400, image: "/items/main005.webp" },
    { id: "main006", name: "ข้าวไข่เจียวหมูสับ", foodType: "main", calories: 500, image: "/items/main006.webp" },
    { id: "main007", name: "ข้าวไก่กระเทียม", foodType: "main", calories: 500, image: "/items/main007.webp" },
    { id: "main008", name: "ข้าวกุ้งกระเทียม", foodType: "main", calories: 450, image: "/items/main008.webp" },
    { id: "main009", name: "ข้าวกะเพราหมูสับไข่ดาว", foodType: "main", calories: 550, image: "/items/main009.webp" },
    { id: "main010", name: "ข้าวกะเพราไก่ไข่ดาว", foodType: "main", calories: 500, image: "/items/main010.webp" },
    { id: "main011", name: "ข้าวกะเพราหมูกรอบ", foodType: "main", calories: 600, image: "/items/main011.webp" },
    { id: "main012", name: "ข้าวกะเพราหมูกรอบ", foodType: "main", calories: 500, image: "/items/main012.webp" },
    { id: "main013", name: "ขนมจีนน้ำยาป่า", foodType: "main", calories: 180, image: "/items/main013.webp" },
    { id: "main014", name: "ยำขนมจีน", foodType: "main", calories: 280, image: "/items/main014.webp" },
    { id: "main015", name: "ขนมจีนแกงเขียวหวาน", foodType: "main", calories: 500, image: "/items/main015.webp" },
    { id: "main016", name: "ราดหน้าหมู", foodType: "main", calories: 600, image: "/items/main016.webp" },
    { id: "main017", name: "ผัดซีอิ้วเส้นใหญ่หมู", foodType: "main", calories: 700, image: "/items/main017.webp" },
    { id: "main018", name: "บะหมี่แห้งหมู", foodType: "main", calories: 240, image: "/items/main018.webp" },
    { id: "main019", name: "ก๋วยเตี๋ยวต้มยำหมู", foodType: "main", calories: 330, image: "/items/main019.webp" },
    { id: "main020", name: "ก๋วยเตี๋ยวหมูน้ำตก", foodType: "main", calories: 400, image: "/items/main020.webp" },
    { id: "main021", name: "ก๋วยเตี๋ยวคั่วไก่", foodType: "main", calories: 490, image: "/items/main021.webp" },
    { id: "main022", name: "กระเพาะปลา", foodType: "main", calories: 150, image: "/items/main022.webp" },
    { id: "main023", name: "ข้าวผัดปู", foodType: "main", calories: 600, image: "/items/main023.webp" },
    { id: "main024", name: "ข้าวผัดคะน้าหมูกรอบ", foodType: "main", calories: 350, image: "/items/main024.webp" },
    { id: "main025", name: "ข้าวผัดไส้กรอก", foodType: "main", calories: 500, image: "/items/main025.webp" },
    { id: "main026", name: "ข้าวผัดหนำเลี๊ยบ", foodType: "main", calories: 370, image: "/items/main026.webp" },
    { id: "main027", name: "ข้าวมันไก่", foodType: "main", calories: 650, image: "/items/main027.webp" },
    { id: "main028", name: "ข้าวมันไก่ทอด", foodType: "main", calories: 550, image: "/items/main028.webp" },
    { id: "main029", name: "ข้าวหมกไก่", foodType: "main", calories: 500, image: "/items/main029.webp" },
    { id: "main030", name: "ข้าวราดแกงเขียวหวานไก่", foodType: "main", calories: 450, image: "/items/main030.webp" },
    { id: "main031", name: "ข้าวหมูกระเทียม", foodType: "main", calories: 450, image: "/items/main031.webp" },
    { id: "main032", name: "โจ๊กหมู", foodType: "main", calories: 260, image: "/items/main032.webp" },
    { id: "main033", name: "บะหมี่แห้งหมูแดง", foodType: "main", calories: 380, image: "/items/main033.webp" },
    { id: "main034", name: "บะหมี่แห้งหมูกรอบ", foodType: "main", calories: 380, image: "/items/main034.webp" },
    { id: "main035", name: "ข้าวหมูแดงหมูกรอบ", foodType: "main", calories: 500, image: "/items/main035.webp" },
    { id: "main036", name: "ข้าวปลาทอด", foodType: "main", calories: 320, image: "/items/main036.webp" },
    { id: "main037", name: "หมี่ผัดฮกเกี้ยน", foodType: "main", calories: 600, image: "/items/main037.webp" },
    { id: "main038", name: "ผัดไทยกุ้งสด", foodType: "main", calories: 480, image: "/items/main038.webp" },
    { id: "main039", name: "โชยุราเมน", foodType: "main", calories: 400, image: "/items/main039.webp" },
    { id: "main040", name: "บะหมี่กรอบราดหน้า", foodType: "main", calories: 500, image: "/items/main040.webp" },
    { id: "main041", name: "สปาเก็ตตี้ซอสมะเขือเทศไก่สับ", foodType: "main", calories: 130, image: "/items/main041.webp" },
    { id: "main042", name: "สปาเก็ตตี้ผัดฉ่าทะเล", foodType: "main", calories: 300, image: "/items/main042.webp" },
    { id: "main043", name: "สุกี้ไก่น้ำ", foodType: "main", calories: 260, image: "/items/main043.webp" },
    { id: "main044", name: "ก๋วยเตี๋ยวลูกชิ้นหมู", foodType: "main", calories: 400, image: "/items/main044.webp" },
    { id: "main045", name: "ข้าวผัดแกงเขียวหวานไก่", foodType: "main", calories: 480, image: "/items/main045.webp" },
    { id: "main046", name: "ยากิโซบะ", foodType: "main", calories: 400, image: "/items/main046.webp" },
    { id: "main051", name: "ข้าวหอมมะลิผสมข้าวไรซ์เบอร์รี่ยำอกไก่ย่าง", foodType: "main", calories: 270, image: "/items/main051.webp" },
    { id: "main047", name: "ข้าวไรซ์เบอร์รี่อกไก่ย่างจิ้มแจ่ว", foodType: "main", calories: 250, image: "/items/main047.webp" },
    { id: "main048", name: "ข้าวอบธัญพืชและไก่", foodType: "main", calories: 280, image: "/items/main048.webp" },
    { id: "main049", name: "ข้าวกล้องต้มไก่ทรงเครื่อง", foodType: "main", calories: 150, image: "/items/main049.webp" },
    { id: "main050", name: "ข้าวผัดไส้กรอก", foodType: "main", calories: 380, image: "/items/main050.webp" },

    { id: "main088", name: "ข้าวเหนียวไก่ย่างจิ้มแจ่ว", foodType: "main", calories: 390, image: "/items/main088.webp" },
    { id: "others001", name: "ปีกไก่ย่าง", foodType: "others", calories: 300, image: "/items/others001.webp" },
    { id: "others003", name: "แกงส้มชะอมทอด", foodType: "others", calories: 200, image: "/items/others003.webp" },
    { id: "others004", name: "แกงเหลืองปลา", foodType: "others", calories: 200, image: "/items/others004.webp" },
    { id: "others006", name: "เกี๊ยวน้ำหมู", foodType: "others", calories: 400, image: "/items/others006.webp" },
    { id: "others007", name: "เกาเหลาลูกชิ้น", foodType: "others", calories: 200, image: "/items/others007.webp" },
    { id: "others008", name: "กุ้งอบวุ้นเส้น", foodType: "others", calories: 300, image: "/items/others008.webp" },
    { id: "others002", name: "ไข่ดาว", foodType: "others", calories: 150, image: "/items/others002.webp" },
    { id: "others005", name: "ไข่ต้ม", foodType: "others", calories: 75, image: "/items/others005.webp" },
    { id: "others013", name: "ไข่นกกระทา 4 ฟอง", foodType: "others", calories: 60, image: "/items/others013.webp" },
    { id: "others014", name: "คอหมูย่าง", foodType: "others", calories: 350, image: "/items/others014.webp" },
    { id: "others009", name: "ต้มยำกุ้ง", foodType: "others", calories: 500, image: "/items/others009.webp" },
    { id: "others010", name: "ลาบหมู", foodType: "others", calories: 230, image: "/items/others010.webp" },
    { id: "others011", name: "ส้มตำไทย", foodType: "others", calories: 50, image: "/items/others011.webp" },
    { id: "others012", name: "หอยแมลงภู่ทอด", foodType: "others", calories: 600, image: "/items/others012.webp" },
    { id: "others016", name: "ข้าวสวย 1 จาน", foodType: "others", calories: 80, image: "/items/others016.webp" },
    { id: "others017", name: "เกี๊ยวหมูน้ำ", foodType: "others", calories: 130, image: "/items/others017.webp" },
    { id: "others018", name: "สลัดผัก 3 สี อกไก่และไข่ต้ม", foodType: "others", calories: 190, image: "/items/others018.webp" },
    { id: "others019", name: "สลัดผัก Oh! Veggies", foodType: "others", calories: 93, image: "/items/others019.webp" },
    { id: "others020", name: "ไข่ตุ๋นคัพสไตล์ญี่ปุ่น", foodType: "others", calories: 164, image: "/items/others020.webp" },
    { id: "others021", name: "ซีเล็กทูน่าสเต๊กในน้ำแร่", foodType: "others", calories: 70, image: "/items/others021.webp" },
    { id: "others022", name: "สลัดทูน่า", foodType: "others", calories: 130, image: "/items/others022.webp" },
    { id: "drinks001", name: "โค๊ก/เปปซี่แก้วเล็ก", foodType: "drinks", calories: 150, image: "/items/drinks001.webp" },
    { id: "drinks002", name: "กาแฟเย็น", foodType: "drinks", calories: 90, image: "/items/drinks002.webp" },
    { id: "drinks003", name: "ลาเต้เย็น", foodType: "drinks", calories: 170, image: "/items/drinks003.webp" },
    { id: "drinks004", name: "ชาดําเย็น", foodType: "drinks", calories: 110, image: "/items/drinks004.webp" },
    { id: "drinks005", name: "ชาไทยเย็น", foodType: "drinks", calories: 120, image: "/items/drinks005.webp" },
    { id: "drinks006", name: "ชาไข่มุก", foodType: "drinks", calories: 300, image: "/items/drinks006.webp" },
    { id: "drinks007", name: "โอเลี้ยง", foodType: "drinks", calories: 100, image: "/items/drinks007.webp" },
    { id: "drinks008", name: "น้ำดื่มขวดเล็ก", foodType: "drinks", calories: 0, image: "/items/drinks008.webp" },
    { id: "drinks011", name: "เปปซี่กระป๋องเล็ก", foodType: "drinks", calories: 140, image: "/items/drinks011.webp" },
    { id: "drinks012", name: "โค้กกระป๋องเล็ก", foodType: "drinks", calories: 140, image: "/items/drinks012.webp" },
    { id: "drinks013", name: "บิ๊กโคล่าขวดเล็ก", foodType: "drinks", calories: 120, image: "/items/drinks013.webp" },
    { id: "drinks014", name: "มิรินด้าขวดเล็ก", foodType: "drinks", calories: 40, image: "/items/drinks014.webp" },
    { id: "drinks015", name: "แฟนต้าขวดเล็ก", foodType: "drinks", calories: 200, image: "/items/drinks015.webp" },
    { id: "drinks018", name: "โออิชิชาคูลล์ซ่า", foodType: "drinks", calories: 60, image: "/items/drinks018.webp" },
    { id: "drinks019", name: "ตันซันซู ฮันนี่เลมอน", foodType: "drinks", calories: 50, image: "/items/drinks019.webp" },
    { id: "drinks020", name: "สไปร์ทกระป๋องเล็ก", foodType: "drinks", calories: 200, image: "/items/drinks020.webp" },
    { id: "drinks021", name: "คาลพิสแลคโตะโซดา", foodType: "drinks", calories: 60, image: "/items/drinks021.webp" },
    { id: "drinks023", name: "ดีโด้", foodType: "drinks", calories: 130, image: "/items/drinks023.webp" },
    { id: "drinks024", name: "ซีวิท", foodType: "drinks", calories: 35, image: "/items/drinks024.webp" },
    { id: "drinks027", name: "โคโค่แม็ก", foodType: "drinks", calories: 80, image: "/items/drinks027.webp" },
    { id: "drinks028", name: "อีฟน้ำเก๊กฮวย", foodType: "drinks", calories: 130, image: "/items/drinks028.webp" },
    { id: "drinks029", name: "เซ็ปเป้ บิวติดริ้งค์", foodType: "drinks", calories: 110, image: "/items/drinks029.webp" },
    { id: "drinks030", name: "คาโตะ", foodType: "drinks", calories: 120, image: "/items/drinks030.webp" },
    { id: "drinks031", name: "บีทาเก้นชาหมัก", foodType: "drinks", calories: 35, image: "/items/drinks031.webp" },
    { id: "snacks001", name: "ขนมเบื้อง 1 ชิ้น", foodType: "snacks", calories: 60, image: "/items/snacks001.webp" },
    { id: "snacks002", name: "ขนมจีบ 4 ลูก", foodType: "snacks", calories: 140, image: "/items/snacks002.webp" },
    { id: "snacks003", name: "ขนมครก 1 คู่", foodType: "snacks", calories: 60, image: "/items/snacks003.webp" },
    { id: "snacks004", name: "ไก่ทอด 1 ชิ้น", foodType: "snacks", calories: 250, image: "/items/snacks004.webp" },
    { id: "snacks005", name: "เกี๊ยวซ่า 4 ชิ้น", foodType: "snacks", calories: 240, image: "/items/snacks005.webp" },
    { id: "snacks006", name: "กล้วยหอม 1 ลูก", foodType: "snacks", calories: 100, image: "/items/snacks006.webp" },
    { id: "snacks007", name: "กล้วยทอด 1 ชิ้น", foodType: "snacks", calories: 50, image: "/items/snacks007.webp" },
    { id: "snacks008", name: "โรตี (ใส่นมข้น+น้ำตาล)", foodType: "snacks", calories: 190, image: "/items/snacks008.webp" },
    { id: "snacks009", name: "ข้าวเหนียวหมูสวรรค์", foodType: "snacks", calories: 400, image: "/items/snacks009.webp" },
    { id: "snacks010", name: "ข้าวเหนียวหมูปิ้ง", foodType: "snacks", calories: 450, image: "/items/snacks010.webp" },
    { id: "snacks011", name: "ข้าวเหนียวหมูทอด", foodType: "snacks", calories: 400, image: "/items/snacks011.webp" },
    { id: "snacks012", name: "ครัวซอง", foodType: "snacks", calories: 400, image: "/items/snacks012.webp" },
    { id: "snacks013", name: "ซาลาเปาหมูสับ", foodType: "snacks", calories: 130, image: "/items/snacks013.webp" },
    { id: "snacks014", name: "ไส้กรอกแดงทอด 1 ไม้", foodType: "snacks", calories: 130, image: "/items/snacks014.webp" },
    { id: "snacks015", name: "ไส้กรอกอีสาน 1 ไม้", foodType: "snacks", calories: 60, image: "/items/snacks015.webp" },
    { id: "snacks016", name: "แอปเปิ้ล 1 ลูก", foodType: "snacks", calories: 100, image: "/items/snacks016.webp" },
    { id: "snacks017", name: "เค้กช็อกโกแลตเล็ก 1 ชิ้น", foodType: "snacks", calories: 100, image: "/items/snacks017.webp" },
    { id: "snacks018", name: "ไอศกรีม 1 ลูก", foodType: "snacks", calories: 140, image: "/items/snacks018.webp" },
    { id: "snacks019", name: "แฮมเบอร์เกอร์", foodType: "snacks", calories: 300, image: "/items/snacks019.webp" },
    { id: "snacks020", name: "เฟรนช์ฟรายส์", foodType: "snacks", calories: 300, image: "/items/snacks020.webp" },
    { id: "snacks021", name: "โอนิกิริแซลมอนย่างซีอิ๊ว", foodType: "snacks", calories: 160, image: "/items/snacks021.webp" },
    { id: "snacks022", name: "อกไก่นุ่ม", foodType: "snacks", calories: 80, image: "/items/snacks022.webp" },
    { id: "snacks023", name: "สันในไก่นุ่มย่างถ่าน", foodType: "snacks", calories: 110, image: "/items/snacks023.webp" },
    { id: "snacks024", name: "แซนวิชแฮมชีส", foodType: "snacks", calories: 230, image: "/items/snacks024.webp" },
    { id: "snacks025", name: "สเต๊กแฮมรมควัน", foodType: "snacks", calories: 80, image: "/items/snacks025.webp" },
    { id: "snacks026", name: "สาหร่ายอบ มาชิตะ", foodType: "snacks", calories: 80, image: "/items/snacks026.webp" },
    { id: "snacks027", name: "ทาโร่ห่อใหญ่", foodType: "snacks", calories: 100, image: "/items/snacks027.webp" },
    { id: "snacks028", name: "เบนโตะห่อใหญ่", foodType: "snacks", calories: 60, image: "/items/snacks028.webp" },
    { id: "snacks029", name: "เมล็ดทานตะวันอบเกลือ", foodType: "snacks", calories: 200, image: "/items/snacks029.webp" },
    { id: "snacks030", name: "เจเล่บิวตี้", foodType: "snacks", calories: 30, image: "/items/snacks030.webp" },
    { id: "snacks031", name: "อัลมอนด์อบเกลือ", foodType: "snacks", calories: 200, image: "/items/snacks031.webp" },
    { id: "snacks032", name: "ลูกเกดดำ ทองการ์เด้น", foodType: "snacks", calories: 90, image: "/items/snacks032.webp" }
    ];
function generateItemHTML(item) {
        return`
              <div id="${item.foodType || 'default'}" class="itemcheckbox">
                  <input type="checkbox" id="${item.id}" name="foodItem" value="${item.name}" data-food-type="${item.foodType}" data-calories="${item.calories}" data-image="${item.image}">
                  <label for="${item.id}">
                      <img src="${item.image}" alt="${item.name}" loading="lazy" />
                      <span class="cover-checkbox">
                          <svg viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </svg>
                      </span>
                      <div class="info">${item.name}<br>${item.calories} kcal</div>
                  </label>
              </div>
          `;
}
// Get the container element
const foodItemsContainer = document.getElementById('fooditems');
// Create an array to store the HTML
const htmlArray = [];
// Loop through items and push HTML to the array
items.forEach(item => {
  htmlArray.push(generateItemHTML(item));
});
// Join the array into a single string and set the innerHTML of the container
foodItemsContainer.innerHTML = htmlArray.join('');