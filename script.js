const message = `لى وليد، 
اولا كل عام وانت بخير .. الله يجعل هذا العمر فاتحه خير عليك ويكتب لك ماتتمنى ويغنيك ويرزقك رزق واسع مبارك فيه. اتمنى ان تكون باحسن حال دايم وابدا واني اشوفك سعيد حتى لو كنت بعيده عنك، كنت ولا زلت اخ عزيز لي طوال هالفتره، سنه كامله اعتز فيها جدا بمعرفتي فيك. تحديت نفسي اني ابرمج هالصفحه حاولت قدر المستطاع اخرج بشي جيد.
والله لو شائت الأقدار ان اختار لي اخ بيدي بختارك انت بدون تردد، اتوقع الكلمات ماراح توفيك حقك بس اتمنى تعرف لأي قدر انا ممتنه لمعرفه شخص زيك في حياتي ، شخص انبسط له بأنجازاته واذكره في ابسط الأمور بدعوه، لعل الله مسخرني ادعيلك بدعوه تصب عليك الرزق وتبارك لك بعمرك وحياتك وهذا والله الي اتمناه لك. ما اسعفني الوقت اكتب رساله اكثر ترتيبًا، لكن اهم شي انها وصلتك.
اتمنى لك سنه سعيده مليئه بالفرح والتوفيق والرزق، يا احسن صيدلي.

اختك جنان.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}


