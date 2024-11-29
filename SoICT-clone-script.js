function barContent() {
    const sections = [
        {
            title: "", links: []
        },
        {
            title: "Giới thiệu",
            links: [["Thông tin chung", "https://soict.hust.edu.vn/category/gioi-thieu"], 
                    ["Triết lý giáo dục", "https://soict.hust.edu.vn/triet-ly-giao-duc"], 
                    ["Cơ cấu tổ chức", "https://soict.hust.edu.vn/co-cau-to-chuc.html"],
                    ["Đảng uỷ - Hội đồng Trường", "https://soict.hust.edu.vn/dang-uy-truong.html"], 
                    ["Ban giám hiệu", "https://soict.hust.edu.vn/ban-giam-hieu.html"],
                    ["Các tổ chức đoàn thể", "https://soict.hust.edu.vn/to-chuc-doan-the.html"], 
                    ["Văn phòng Trường", "https://soict.hust.edu.vn/bo-phan/van-phong-truong"], 
                    ["Danh sách cán bộ", "https://soict.hust.edu.vn/can-bo"]]
        },
        {
            title: "Khoa - Trung tâm",
            links: [["Trung tâm Máy tính và Thực hành", "https://soict.hust.edu.vn/bo-phan/trung-tam-may-tinh-va-thuc-hanh"],
                    ["Trung tâm Đổi mới sáng tạo", "https://soict.hust.edu.vn/bo-phan/trung-tam-doi-moi-sang-tao"], 
                    ["Trung tâm An toàn - An ninh", "https://soict.hust.edu.vn/bo-phan/trung-tam-cyber-security"]]
        },
        {
            title: "Đào tạo",
            links: [["Giới thiệu chung", "https://soict.hust.edu.vn/dao-tao/gioi-thieu-chung"], 
                    ["Hệ đại học", "https://soict.hust.edu.vn/category/dao-tao/he-dai-hoc"], 
                    ["Hệ thạc sỹ", "https://soict.hust.edu.vn/dao-tao/he-thac-sy"], 
                    ["Hệ tiến sỹ", "https://soict.hust.edu.vn/dao-tao/dao-tao-tien-sy"], 
                    ["Đào tạo ngắn hạn", "https://soict.hust.edu.vn/category/dao-tao/dao-tao-ngan-han"]]
        },
        {
            title: "Nghiên cứu",
            links: [["Giới thiệu chung", "https://soict.hust.edu.vn/category/nghien-cuu"], 
                    ["Các Trung tâm nghiên cứu", "https://soict.hust.edu.vn/nghien-cuu/trung-tam-nghien-cuu"], 
                    ["Các Đề tài - Dự án", "https://soict.hust.edu.vn/nghien-cuu/cac-de-tai-du-an"], 
                    ["Công bố khoa học", "https://soict.hust.edu.vn/category/nghien-cuu/cong-bo-khoa-hoc"], 
                    ["Tìm chuyên gia?", "https://soict.hust.edu.vn/can-bo"]]
        },
        {
            title: "Tuyển sinh",
            links: [["Thông tin tuyển sinh 2024", "https://soict.hust.edu.vn/thong-tin-tuyen-sinh-2024.html"], 
                    ["Điểm chuẩn tham khảo", "https://soict.hust.edu.vn/diem-chuan-tham-khao.html"], 
                    ["Hỏi đáp về tuyển sinh", "https://soict.hust.edu.vn/hoi-dap-ve-tuyen-sinh.html"]]
        },
        {
            title: "Sinh viên",
            links: [["Cố vấn học tập", "https://soict.hust.edu.vn/lich-truc-co-van-hoc-tap.html"], 
                    ["Câu lạc bộ Sinh viên", "https://soict.hust.edu.vn/sinh-vien/clbsv"], 
                    ["Thực tập doanh nghiệp", "https://soict.hust.edu.vn/thuc-tap-doanh-nghiep.html"]]
        },
        {
            title: "Hợp tác đối ngoại",
            links: [["Giới thiệu chung", "https://soict.hust.edu.vn/hop-tac-doi-ngoai"], 
                    ["Hợp tác với Khối hàn lâm", "https://soict.hust.edu.vn/hop-tac-quoc-te.html"], 
                    ["Hợp tác với Khối doanh nghiệp", "https://soict.hust.edu.vn/hop-tac-voi-khoi-doanh-nghiep.html"]]
        },
        {
            title: "Cựu sinh viên",
            links: [["Giới thiệu chung", "https://soict.hust.edu.vn/sinh-vien/cuu-sinh-vien"], 
                    ["Tấm gương cựu sinh viên", "https://soict.hust.edu.vn/tam-guong-cuu-sinh-vien.html"]]
        },
        {
            title: "Tin tức - Sự kiện",
            links: [["Thông báo - Tin bài", "https://soict.hust.edu.vn/tin-tuc/thong-bao"], 
                    ["Sự kiện đã diễn ra", "https://soict.hust.edu.vn/su-kien?sort=took-place"], 
                    ["Sự kiện sắp diễn ra", "https://soict.hust.edu.vn/su-kien?sort=upcoming"]]
        },
        {
            title: "Tuyển dụng",
            links: [["Việc làm tại SOICT", "https://soict.hust.edu.vn/tuyen-dung/viec-lam-tai-soict"], 
                    ["Việc làm tại doanh nghiệp", "https://soict.hust.edu.vn/tuyen-dung/viec-lam-cho-sinh-vien"]]
        },
        {
            title: "", links: []
        }
    ];
    
    const container = document.getElementById('bar-container');
    
    sections.forEach(section => {
        const sectionDiv = document.createElement('section');
        sectionDiv.classList.add('bar');
    
        const span = document.createElement('span');
        span.textContent = section.title;
        span.addEventListener('', () => {
            const content = sectionDiv.querySelector('.bar-content');
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    
        const div = document.createElement('div');
        div.classList.add('bar-content');
    
        section.links.forEach(linkText => {
            const a = document.createElement('a');
            a.href = linkText[1];
            a.textContent = linkText[0];
            div.appendChild(a);
        });
    
        sectionDiv.appendChild(span);
        sectionDiv.appendChild(div);
        container.appendChild(sectionDiv);
    });
}

function slideImage(imagePerView, move) {
    const slides = document.querySelector('.slides' + imagePerView);
    const slide = document.querySelectorAll('#slide' + imagePerView);
    let currentIndex = 0;

    document.getElementById('next'+ imagePerView).addEventListener('click', () => {
        if (currentIndex < slide.length - imagePerView) {
            currentIndex++;
        }
        else {
            currentIndex = 0;
        }
        slides.style.transform = `translateX(-${currentIndex * move}vw)`;
    });
    
    document.getElementById('prev'+ imagePerView).addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        }
        else {
            currentIndex = slide.length - imagePerView;
        }
        slides.style.transform = `translateX(-${currentIndex * move}vw)`;
    });
}

function addLinkImage(index) {
    const links = [
        ["https://soict.hust.edu.vn/le-trao-chung-nhan-hoc-bong-khuyen-khich-hoc-tap-ky-2023-2.html",
        "https://soict.hust.edu.vn/seminar-thang-6-2024-truong-cntttt.html",
        "https://soict.hust.edu.vn/graduation-day-2024.html",
        "https://soict.hust.edu.vn/seminar-thang-7-2024-truong-cntttt.html",
        "https://soict.hust.edu.vn/tu-van-giai-dap-tuyen-sinh.html",
        "https://soict.hust.edu.vn/truong-he-2024-ve-tri-tue-nhan-tao-tao-sinh.html",
        "https://soict.hust.edu.vn/truong-he-ve-y-hoc-chinh-xac-2024-precision-medicine-division-global-project.html",
        "https://soict.hust.edu.vn/seminar-thang-8-2024-truong-cntttt.html",
        "https://soict.hust.edu.vn/seminar-thang-9-2024-truong-cntttt.html",
        "https://soict.hust.edu.vn/trao-chung-chi-ta-cho-sinh-vien-ho-tro-giang-day-ky-2-nam-hoc-2023-2024.html",
        "https://soict.hust.edu.vn/cuoc-thi-olympic-tin-hoc-bkhn-2024.html",
        "https://soict.hust.edu.vn/hoi-thao-quoc-te-ve-cong-nghe-thong-tin-va-truyen-thong-soict-2024.html"
        ],
        ["https://soict.hust.edu.vn/nguyen-tu-quang.html",
        "https://soict.hust.edu.vn/vuong-quang-khai.html",
        "https://soict.hust.edu.vn/hoang-viet-anh-chi-co-mot-tinh-yeu-duy-nhat.html",
        "https://soict.hust.edu.vn/lu-thanh-long-thu-linh-cong-nghe.html",
        "https://soict.hust.edu.vn/nguyen-ha-dong.html",
        "https://soict.hust.edu.vn/tran-viet-hung.html"
        ]
        
    ];

    document.querySelectorAll('.slide-blocks' + index + ' img').forEach((img, ind) => {
        const a = document.createElement('a');
        a.href = links[index - 3][ind];
        img.parentNode.insertBefore(a, img);
        a.appendChild(img);
    });
}

function showImage(index) {
    const images = document.querySelectorAll('.soict-img');
    const texts = document.querySelectorAll('.soict-text');
    const buttons = document.querySelectorAll('.soict-button');
    const names = document.querySelectorAll('.soict-name');
    images.forEach((img, i) => {
        img.classList.remove('active');
        texts[i].classList.remove('active');
        buttons[i].classList.remove('active');
        names[i].classList.remove('active');
    });
    document.getElementById('img' + index).classList.add('active');
    document.getElementById('soict-text' + index).classList.add('active');
    document.getElementById('soict-button' + index).classList.add('active');
    document.getElementById('name' + index).classList.add('active');
}