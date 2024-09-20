let menuBtn = document.querySelector(".menu");
let navLinks = document.querySelector(".col1 ul");

menuBtn.onclick = (event) => {
    // منع إغلاق القائمة إذا ضغطت على الزر نفسه
    event.stopPropagation();
    
    navLinks.classList.toggle("open");
    
    // تحقق مما إذا كانت القائمة مفتوحة أم لا
    if (navLinks.classList.contains("open")) {
        // إعدادات القائمة عندما تكون مفتوحة
        navLinks.style.width = "170px";
        navLinks.style.marginTop = "20px";
        navLinks.style.marginRight = "15px";
        navLinks.style.flexDirection = "column-reverse";
        navLinks.style.boxShadow = "2px 5px 12px rgba(0, 0, 0, 0.15)";
        navLinks.style.borderRadius = "10px";

        // تغيير الأيقونة إلى علامة الإغلاق
        menuBtn.innerHTML = `
            <div class="menu">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
    } else {
        // إعادة تعيين القائمة عند الإغلاق
        resetMenuStyles();
    }
};

// إغلاق القائمة عند النقر في مكان فارغ
document.onclick = (event) => {
    if (navLinks.classList.contains("open") && !menuBtn.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("open");
        resetMenuStyles(); // إعادة تعيين الأنماط إلى الافتراضية
    }
};

// دالة لإعادة تعيين أنماط القائمة عند الإغلاق
function resetMenuStyles() {
    navLinks.style.width = ""; // يمكنك إزالة القيم المخصصة إذا كانت افتراضية
    navLinks.style.marginTop = "";
    navLinks.style.marginRight = "";
    navLinks.style.flexDirection = "";
    navLinks.style.boxShadow = "";
    navLinks.style.borderRadius = "";

    // إعادة أيقونة البرغر
    menuBtn.innerHTML = `
        <div class="menu">
            <i class="fa-solid fa-bars"></i>
        </div>
    `;
}

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('language-select').addEventListener('change', function() {
    var selectedPage = this.value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
});

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;

        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
            parent.classList.add('active');
        }
    });
});

const texts = ["التصـميـم الـجـرافـيـكـي", "تـحـريــر الـــفــيــديــــو", "تـطــويــر الــمــــواقــع"];
        let count = 0;
        const textElement = document.querySelector('.changing-text');

        function changeText() {
            textElement.textContent = texts[count];
            count = (count + 1) % texts.length;
        }

        setInterval(changeText, 4000); // Change every 4 seconds
        changeText(); // Initialize with the first text
        
        
        document.getElementById("profile-download-btn").addEventListener("click", function() {
            // تحديد مسار الملف الذي ترغب في تحميله
            const fileUrl = './'; // استبدل هذا بالمسار الفعلي للملف

            // إنشاء عنصر <a> لتمكين تحميل الملف
            const a = document.createElement("a");
            a.href = fileUrl;
            a.download = fileUrl.split('/').pop(); // تحديد اسم الملف المراد تحميله

            // إضافة عنصر <a> إلى المستند ثم النقر عليه برمجيًا
            document.body.appendChild(a);
            a.click();

            // إزالة عنصر <a> بعد انتهاء التحميل
            document.body.removeChild(a);
        });

        from_name= document.getElementById("full-name")
        project_title= document.getElementById("project-title")
        phone_number= document.getElementById("phone-number")
        message= document.getElementById("message")



function sendMail() {

    if (from_name.value !== "" & project_title.value !== "" & phone_number.value !== "" & message.value !== "") {

        params = {
            from_name: document.getElementById("full-name").value,
            project_title: document.getElementById("project-title").value,
            phone_number: document.getElementById("phone-number").value,
            message: document.getElementById("message").value
        };
        emailjs.send("service_qet1kvh", "template_3byq8wf", params).then((res) => {
        
            Swal.fire({
                title: "تم الإرسال",
                text: "تم إرسال الإستفسار بنجاح!",
                icon: "success"
              });

              document.getElementById("full-name").value = ""
              document.getElementById("project-title").value = ""
              document.getElementById("phone-number").value = ""
              document.getElementById("message").value = ""
        })


} else {
    Swal.fire({
        title: "حدث خطأ..",
        text: "الرجاء إدخال الإستفسار للإرسال!!",
        icon: "error"
      });
}

}

const showMoreBtn = document.getElementById('show-more');
const readMoreBtn = document.getElementById('read-more');
const extraContent = document.getElementById('extraContent');

showMoreBtn.addEventListener('click', function() {
    extraContent.style.display = "block";
    showMoreBtn.style.display = "none"; // إخفاء الزر "اقرأ المزيد" بعد الضغط
});

readMoreBtn.addEventListener('click', function() {
    extraContent.style.display = "none";
    showMoreBtn.style.display = "inline-block"; // إعادة إظهار الزر "اقرأ المزيد"
});



        
