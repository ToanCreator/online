// Cấu hình Firebase của bạn
const firebaseConfig = {
    apiKey: "AIzaSyAO2AZt_1zXoAU7mz0xEvs5rAlzr6eNqd4",
    authDomain: "toancreator-online-study-40099.firebaseapp.com",
    projectId: "toancreator-online-study-40099",
    storageBucket: "toancreator-online-study-40099.appspot.com",
    messagingSenderId: "708023468909",
    appId: "1:708023468909:web:0976d16cd55ac8b7741064",
    measurementId: "G-T6703221V4" // Cập nhật measurementId
};
// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Khởi tạo thông báo
document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị thông báo nếu chưa đóng
    if (!localStorage.getItem('notificationClosed')) {
        document.getElementById('notificationBox').style.display = 'flex';
    }
    
    // Xử lý nút đóng
    const closeBtn = document.getElementById('closeBtn');
    if (closeBtn) {
        // Hỗ trợ cả touch và click
        closeBtn.addEventListener('click', closeNotification);
        closeBtn.addEventListener('touchend', closeNotification);
    }
    
    // Render các môn học
    renderSubjects();
});

function closeNotification(e) {
    e.preventDefault();
    const notificationBox = document.getElementById('notificationBox');
    if (notificationBox) {
        notificationBox.style.display = 'none';
        
    }
}


// Subject data - THIS IS WHERE YOU ADD NEW LESSONS
const subjects = [
    {
        id: 1,
        title: "Toán Học",
        image: "https://i.ibb.co/k2YXTgMW/retouch-2025060606131334.jpg",
        lessons: ["TOAN-12-U1","TOAN-12-U2"]
    },
    {
        id: 2,
        title: "Vật Lý",
        image: "https://i.ibb.co/sddMYYvR/retouch-2025060606155524.jpg",
        lessons: ["LY-12-U1","LY-12-U2","LY-12-U3","LY-12-U4"]
    },
    {
        id: 3,
        title: "Hoá Học",
        image: "https://i.ibb.co/hRRhv6Q3/retouch-2025060606181047.jpg",
        lessons: []
    },
    {
        id: 4,
        title: "Sinh Học",
        image: "https://i.ibb.co/NgrFSmFr/retouch-2025060606201548.jpg",
        lessons: []
    },
    {
        id: 5,
        title: "Lịch Sử",
        image: "https://i.ibb.co/wFT1xJk9/retouch-2025060606211684.jpg",
        lessons: []
    },
    {
        id: 6,
        title: "Tin Học",
        image: "https://i.ibb.co/rK9qqkK5/retouch-2025060606223138.jpg",
        lessons: ["TIN-12-U1"]
    },
    {
            id: 7,
            title: "Websites",
            image: "https://i.ibb.co/Qvy9Vctj/wmremove-transformed-1.jpg",
            lessons: ["THPT NGÔ GIA TỰ"]
    },
    {
            id: 8,
            title: "Khác",
            image: "https://i.ibb.co/BVdRPgtn/wmremove-transformed.jpg",
            lessons: ["BỘ 30 ĐỀ THI TN TIN 2025","Bí Kíp Gia Truyền","SQL PYTHON"]
    }
];

// Colors for background changes
// Thêm vào phần khai báo biến (gần mảng subjects và subjectColors)
const subjectBackgrounds = [
    "https://i.ibb.co/cX1pxM9c/pixeleap-1753504335233.webp", // Toán
    "https://i.ibb.co/3m4KBmbh/pixeleap-1753504425919.webp", // Lý
    "https://i.ibb.co/j9YxBS51/pixeleap-1753504533370.webp", // Hoá
    "https://i.ibb.co/Nq0FLgK/pixeleap-1753504609076.webp", // Sinh
    "https://i.ibb.co/8nF1wmnL/pixeleap-1753504685794.webp", // Sử
    "https://i.ibb.co/xqXPtsnr/pixeleap-1753504763261.webp",  // Tin
    "https://i.ibb.co/Y4zKThsP/pixeleap-1753504833672.webp",    // Websites
    "https://i.ibb.co/CpCSTsLj/pixeleap-1753504912388.webp"      // Khác
];

// Hiển thị các môn học
function renderSubjects() {
    const container = document.getElementById('subjectsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.style.backgroundImage = `url(${subject.image})`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        
        const overlay = document.createElement('div');
        overlay.className = 'subject-overlay';
        
        const title = document.createElement('h3');
        title.className = 'subject-title';
        title.textContent = subject.title;
        
        const lessons = document.createElement('p');
        lessons.className = 'subject-lessons';
        lessons.textContent = `${subject.lessons.length} bài học`;
        
        overlay.appendChild(title);
        overlay.appendChild(lessons);
        card.appendChild(overlay);
        
        container.appendChild(card);
    });
}

// DOM elements
const subjectsContainer = document.getElementById('subjectsContainer');
const background = document.querySelector('.background');
const toggleHeart = document.getElementById('toggleHeart');
const downloadModal = document.getElementById('downloadModal');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const btnGuide = document.getElementById('btnGuide');
const btnConfirm = document.getElementById('btnConfirm');
const guideContent = document.getElementById('guideContent');
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');
const deleteModal = document.getElementById('deleteModal');
const btnDeleteConfirm = document.getElementById('btnDeleteConfirm');
const btnDeleteCancel = document.getElementById('btnDeleteCancel');
const adminPasswordInput = document.getElementById('adminPassword');
const codeEditor = document.getElementById('codeEditor');
const fileUpload = document.getElementById('fileUpload');
const uploadBtn = document.getElementById('uploadBtn');
const runBtn = document.getElementById('runBtn');
const outputContainer = document.getElementById('outputContainer');
const codeOptions = document.querySelectorAll('.code-runner-option');
const youtubeSearchInput = document.getElementById('Youtube-input');
const youtubeSearchButton = document.getElementById('Youtube-button');
const youtubeVideoPlayer = document.getElementById('youtube-video-player');
const youtubeResultsContainer = document.getElementById('youtube-results-container');
const youtubeViewMoreLess = document.getElementById('youtubeViewMoreLess');
const youtubeViewMore = document.getElementById('youtubeViewMore');
const youtubeViewLess = document.getElementById('youtubeViewLess');
const youtubeTabs = document.querySelectorAll('.youtube-tab');
const youtubePagination = document.getElementById('youtubePagination');
const youtubePrevPage = document.getElementById('youtubePrevPage');
const youtubeNextPage = document.getElementById('youtubeNextPage');
const commentsViewMoreLess = document.getElementById('commentsViewMoreLess');
const commentsViewMore = document.getElementById('commentsViewMore');
const commentsViewLess = document.getElementById('commentsViewLess');

// Current selected subject
let currentSubject = null;
let currentLesson = null;
let currentLanguage = 'python';
let currentSearchType = 'video';
let commentToDelete = null;
let allYoutubeVideos = [];
let allYoutubeChannels = []; // Biến mới để lưu trữ kết quả kênh
let allYoutubePlaylists = []; // Biến mới để lưu trữ kết quả playlist
let allComments = [];
let visibleComments = 5;
let visibleVideos = 6; // Đặt giá trị mặc định là 6 để khớp với grid
let youtubeNextPageToken = '';
let youtubePrevPageToken = '';

// YouTube API Key
const YOUTUBE_API_KEY = 'AIzaSyCluAyE_t8cSW7tltU96CHETSSjnEOmtuI';
// Đã loại bỏ Youtube_URL vì chúng ta sẽ xây dựng URL động

// Initialize the page
function init() {
    renderSubjects();
    loadComments();
    
    // Event listeners
    toggleHeart.addEventListener('click', createHeart);
    btnYes.addEventListener('click', downloadLesson);
    btnNo.addEventListener('click', closeModal);
    btnGuide.addEventListener('click', showGuide);
    btnConfirm.addEventListener('click', hideGuide);
    btnDeleteConfirm.addEventListener('click', confirmDeleteComment);
    btnDeleteCancel.addEventListener('click', cancelDeleteComment);
    commentForm.addEventListener('submit', addComment);
    
    // Code runner events
    codeOptions.forEach(option => {
        option.addEventListener('click', () => {
            codeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            currentLanguage = option.dataset.language;
            codeEditor.placeholder = currentLanguage === 'python' 
                ? "Nhập code Python của bạn vào đây..." 
                : "Nhập code HTML của bạn vào đây...";
        });
    });
    
    uploadBtn.addEventListener('click', () => fileUpload.click());
    fileUpload.addEventListener('change', handleFileUpload);
    runBtn.addEventListener('click', runCode);
    
    // YouTube events
    youtubeSearchButton.addEventListener('click', searchYoutubeVideos);
    youtubeSearchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchYoutubeVideos();
        }
    });
    
    // YouTube tabs
    youtubeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            youtubeTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSearchType = tab.dataset.type;
            youtubeSearchInput.placeholder = getPlaceholderForSearchType(currentSearchType);
            // Xóa kết quả cũ khi chuyển tab
            youtubeResultsContainer.innerHTML = '';
            allYoutubeVideos = [];
            allYoutubeChannels = [];
            allYoutubePlaylists = [];
            youtubeViewMoreLess.style.display = 'none';
            youtubePagination.style.display = 'none';
        });
    });
    
    // View more/less buttons
    youtubeViewMore.addEventListener('click', showMoreVideos);
    youtubeViewLess.addEventListener('click', showLessVideos);
    youtubePrevPage.addEventListener('click', loadPrevPage);
    youtubeNextPage.addEventListener('click', loadNextPage);
    commentsViewMore.addEventListener('click', showMoreComments);
    commentsViewLess.addEventListener('click', showLessComments);
}

function getPlaceholderForSearchType(type) {
    switch(type) {
        case 'video': return 'Nhập từ khóa tìm kiếm video...';
        case 'channel': return 'Nhập tên kênh YouTube...'; // Thêm placeholder cho kênh
        case 'playlist': return 'Nhập từ khóa tìm kiếm playlist...'; // Thêm placeholder cho playlist
        case 'url': return 'Dán URL YouTube (video/playlist/kênh)...';
        default: return 'Nhập từ khóa tìm kiếm...';
    }
}

// Render subjects to the page
function renderSubjects() {
    subjectsContainer.innerHTML = '';
    
    subjects.forEach(subject => {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card';
        subjectCard.dataset.subjectId = subject.id;
        
        // Set background image
        subjectCard.style.backgroundImage = `url(${subject.image})`;
        subjectCard.style.backgroundSize = 'cover';
        subjectCard.style.backgroundPosition = 'center';
        
        // Create overlay with subject info
        const overlay = document.createElement('div');
        overlay.className = 'subject-overlay';
        
        const title = document.createElement('h3');
        title.className = 'subject-title';
        title.textContent = subject.title;
        
        const lessons = document.createElement('p');
        lessons.className = 'subject-lessons';
        lessons.textContent = `${subject.lessons.length} bài học`;
        
        // Swipe indicator
        const swipeIndicator = document.createElement('div');
        swipeIndicator.className = 'swipe-indicator';
        swipeIndicator.textContent = 'Vuốt trái/phải để xem bài học';
        
        overlay.appendChild(title);
        overlay.appendChild(lessons);
        subjectCard.appendChild(overlay);
        subjectCard.appendChild(swipeIndicator);
        
        // Add event listeners for swipe
        setupSwipeEvents(subjectCard, subject);
        
        // Add click event to show download modal
        subjectCard.addEventListener('click', () => {
            if (currentLesson) {
                currentSubject = subject;
                showDownloadModal();
            }
        });
        
        subjectsContainer.appendChild(subjectCard);
    });
}

// Set up swipe events for subject cards
function setupSwipeEvents(card, subject) {
    let touchStartX = 0;
    let touchEndX = 0;
    let currentLessonIndex = -1;
    
    card.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    card.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    // For mouse events (testing on desktop)
    card.addEventListener('mousedown', e => {
        touchStartX = e.screenX;
        document.addEventListener('mouseup', handleMouseUp);
    });
    
    function handleMouseUp(e) {
        touchEndX = e.screenX;
        handleSwipe();
        document.removeEventListener('mouseup', handleMouseUp);
    }
    
    function handleSwipe() {
        const threshold = 50; // Minimum swipe distance
        
        if (touchEndX < touchStartX - threshold) {
            // Swipe left - next lesson
            currentLessonIndex = (currentLessonIndex + 1) % subject.lessons.length;
            updateLessonDisplay(card, subject, currentLessonIndex);
        } else if (touchEndX > touchStartX + threshold) {
            // Swipe right - previous lesson
            currentLessonIndex = (currentLessonIndex - 1 + subject.lessons.length) % subject.lessons.length;
            updateLessonDisplay(card, subject, currentLessonIndex);
        }
    }
}

// Update the lesson display after swipe
function updateLessonDisplay(card, subject, lessonIndex) {
    const overlay = card.querySelector('.subject-overlay');
    const lessonsText = overlay.querySelector('.subject-lessons');
    
    currentSubject = subject;
    currentLesson = subject.lessons[lessonIndex];
    
    // Thay đổi ảnh nền thay vì màu nền
    const bgImage = subjectBackgrounds[subject.id - 1];
    document.querySelector('.background').style.backgroundImage = `url(${bgImage})`;
    document.querySelector('.background').style.backgroundSize = 'cover';
    document.querySelector('.background').style.backgroundPosition = 'center';
    
    // Update lesson display
    lessonsText.textContent = subject.lessons[lessonIndex];
    
    // Hiệu ứng phóng to nhỏ khi chọn
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 200);
}

// Show download modal
function showDownloadModal() {
    if (!currentSubject || !currentLesson) return;
    
    const modalMessage = downloadModal.querySelector('.modal-message');
    modalMessage.textContent = `Bạn có muốn truy cập "${currentLesson}" của "${currentSubject.title}" không?`;
    
    guideContent.style.display = 'none';
    downloadModal.style.display = 'flex';
}

// Close modal
function closeModal() {
    downloadModal.style.display = 'none';
    deleteModal.style.display = 'none';
}

// Show guide content
function showGuide() {
    guideContent.style.display = 'block';
}

// Hide guide content
function hideGuide() {
    guideContent.style.display = 'none';
}

// Simulate download
// Thay thế hàm downloadLesson bằng code mới
function downloadLesson() {
    if (!currentSubject || !currentLesson) return;
    
    // Xử lý riêng cho môn Websites (id:7) và Khác (id:8)
    if (currentSubject.id === 7 || currentSubject.id === 8) {
        // Tạo một đối tượng chứa các liên kết tương ứng với từng bài học
        const lessonLinks = {
            // Môn Websites (id:7)
            "THPT NGÔ GIA TỰ": "https://thptngogiatu.giaoductayninh.vn/",
            
            // Môn Khác (id:8)
            "BỘ 30 ĐỀ THI TN TIN 2025": "https://is.gd/0Byez9",
            "SQL PYTHON": "https://is.gd/VF8MV9",
            
        };
        
        // Kiểm tra xem bài học hiện tại có trong danh sách liên kết không
        if (lessonLinks[currentLesson]) {
            // Mở liên kết trong tab mới
            window.open(lessonLinks[currentLesson], '_blank');
        } else {
            alert("Bài học này chưa có liên kết tải xuống!");
        }
        
        closeModal();
        return;
    } 
    // Xử lý cho các môn học khác (id 1-6)
    else {
        const subjectFolders = {
            1: "math",
            2: "physic",
            3: "chemistry",
            4: "biology",
            5: "history",
            6: "IT"
        };
        
        const folder = subjectFolders[currentSubject.id];
        if (!folder) {
            alert("Môn học không tồn tại!");
            closeModal();
            return;
        }
        
        const fileName = currentLesson;
        const relativePath = `${folder}/${fileName}.html`;
        
        console.log("Đang truy cập:", relativePath);
        window.location.href = relativePath;
    }
}

// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // Random heart from the list
    const hearts = ['❤️','🧡','💛','💚','🩵','💙','💜','🤎','🖤','🩶','🤍','🩷','💘','💝','💖','💗','💓','💞','💕','♥️','❣️','❤️‍🔥','🫀','Toàn Creator 😎'];
    const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
    heart.textContent = randomHeart;
    
    // Random position
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight;
    
    // Random movement direction
    const tx = (Math.random() - 0.5) * 200;
    const ty = -Math.random() * 300 - 100;
    
    heart.style.setProperty('--tx', `${tx}px`);
    heart.style.setProperty('--ty', `${ty}px`);
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    
    document.body.appendChild(heart);
    
    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// ==================== HỆ THỐNG BÌNH LUẬN VỚI FIREBASE ====================

// Thêm bình luận mới
async function addComment(e) {
    e.preventDefault();
    
    // Verify CAPTCHA
    const captchaResponse = grecaptcha.getResponse();
    if (!captchaResponse) {
        alert("Vui lòng xác minh bạn không phải là robot!");
        return;
    }
    
    const username = document.getElementById('username').value;
    const commentText = document.getElementById('comment').value;
    
    if (!username || !commentText) return;
    
    try {
        // Thêm bình luận vào Firestore
        await db.collection("comments").add({
            username: username === "//:ADMIN" ? "Toàn Creator ✅" : username,
            text: commentText,
            isAdmin: username === "//:ADMIN",
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        // Làm mới form
        commentForm.reset();
        grecaptcha.reset();
    } catch (error) {
        console.error("Lỗi khi thêm bình luận: ", error);
        alert("Có lỗi khi gửi bình luận!");
    }
}

// Tải và hiển thị bình luận
function loadComments() {
    db.collection("comments")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
            allComments = [];
            snapshot.forEach((doc) => {
                allComments.push({ id: doc.id, ...doc.data() });
            });
            updateCommentsDisplay();
        }, (error) => {
            console.error("Lỗi khi tải bình luận: ", error);
            commentsList.innerHTML = '<p>Không thể tải bình luận. Vui lòng thử lại sau.</p>';
        });
}

// Hiển thị bình luận với tính năng xem thêm/thu gọn
function updateCommentsDisplay() {
    commentsList.innerHTML = '';
    
    // Hiển thị số lượng bình luận tương ứng
    const commentsToShow = allComments.slice(0, visibleComments);
    
    commentsToShow.forEach(comment => {
        displayComment(comment);
    });
    
    // Hiển thị nút xem thêm/thu gọn nếu có nhiều hơn 5 bình luận
    if (allComments.length > 5) {
        commentsViewMoreLess.style.display = 'flex';
        
        // Ẩn nút xem thêm nếu đã hiển thị tất cả
        commentsViewMore.style.display = visibleComments >= allComments.length ? 'none' : 'block';
        
        // Ẩn nút thu gọn nếu đang hiển thị 5 bình luận đầu
        commentsViewLess.style.display = visibleComments <= 5 ? 'none' : 'block';
    } else {
        commentsViewMoreLess.style.display = 'none';
    }
}

// Hiển thị bình luận
function displayComment(comment) {
    const commentElement = document.createElement('div');
    commentElement.className = `comment ${comment.isAdmin ? 'admin-comment' : ''}`;
    
    // Format ngày tháng
    const date = comment.createdAt ? 
        new Date(comment.createdAt.seconds * 1000).toLocaleString() : 
        'Vừa xong';
    
    commentElement.innerHTML = `
        <div class="comment-header">
            <span>${comment.username}</span>
            <span>${date}</span>
        </div>
        <div class="comment-content">${comment.text}</div>
        ${comment.isAdmin ? '<button class="delete-comment-btn">✕</button>' : ''}
    `;
    
    // Thêm sự kiện xóa nếu là admin
    const deleteBtn = commentElement.querySelector('.delete-comment-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            deleteComment(comment.id);
        });
    }
    
    commentsList.appendChild(commentElement);
}

// Xóa bình luận
async function deleteComment(commentId) {
    if (confirm("Bạn có chắc muốn xóa bình luận này?")) {
        try {
            await db.collection("comments").doc(commentId).delete();
        } catch (error) {
            console.error("Lỗi khi xóa bình luận: ", error);
            alert("XOÁ 🆑");
        }
    }
}

// Xác nhận xóa bình luận (dùng modal)
async function confirmDeleteComment() {
    const password = adminPasswordInput.value;
    if (password === "4225:HACK") {
        try {
            await db.collection("comments").doc(commentToDelete.id).delete();
            adminPasswordInput.value = '';
            closeModal();
        } catch (error) {
            console.error("Lỗi khi xóa bình luận: ", error);
            alert("XOÁ 🆑");
        }
    } else {
        alert("Mật khẩu không đúng!");
    }
}

function cancelDeleteComment() {
    adminPasswordInput.value = '';
    closeModal();
}

// Hiển thị thêm bình luận
function showMoreComments() {
    visibleComments += 5;
    updateCommentsDisplay();
}

// Thu gọn bình luận
function showLessComments() {
    visibleComments = 5;
    updateCommentsDisplay();
}

// ==================== PHẦN CODE RUNNER ====================

// Code Runner Functions
function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        codeEditor.value = event.target.result;
    };
    reader.readAsText(file);
}

// Hàm mở chế độ fullscreen
function openFullscreen(code) {
    // Tạo div fullscreen
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.className = 'output-fullscreen';
    
    // Tạo iframe fullscreen
    const iframe = document.createElement('iframe');
    iframe.className = 'fullscreen-iframe';
    iframe.srcdoc = code;
    
    // Tạo nút đóng
    const closeBtn = document.createElement('button');
    closeBtn.className = 'fullscreen-btn close-fullscreen';
    closeBtn.textContent = 'Đóng';
    closeBtn.onclick = () => document.body.removeChild(fullscreenDiv);
    
    // Thêm controls
    const controls = document.createElement('div');
    controls.className = 'fullscreen-controls';
    controls.appendChild(closeBtn);
    
    // Thêm các phần tử vào fullscreen div
    fullscreenDiv.appendChild(iframe);
    fullscreenDiv.appendChild(controls);
    
    // Thêm vào body
    document.body.appendChild(fullscreenDiv);
}

function runCode() {
    const code = codeEditor.value;
    if (!code.trim()) {
        outputContainer.innerHTML = '<p class="error-message">Vui lòng nhập code hoặc tải lên file!</p>';
        return;
    }
    
    outputContainer.innerHTML = '<p>Đang chạy chương trình...</p>';
    
    try {
        if (currentLanguage === 'python') {
            outputContainer.innerHTML = `
                <p><strong>Kết quả mô phỏng Python:</strong></p>
                <p>Code Python không thể chạy trực tiếp trên trình duyệt.</p>
                <p>Để chạy Python, bạn cần cài đặt Python trên máy và chạy file.</p>
            `;
        } else {
            // Tạo iframe bình thường
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '300px';
            iframe.style.border = '1px solid #ddd';
            iframe.style.borderRadius = '5px';
            iframe.srcdoc = code;
            
            // Tạo nút phóng to
            const expandBtn = document.createElement('button');
            expandBtn.className = 'fullscreen-btn';
            expandBtn.textContent = 'Phóng to';
            expandBtn.onclick = () => openFullscreen(code);
            
            outputContainer.innerHTML = '';
            outputContainer.appendChild(iframe);
            outputContainer.appendChild(expandBtn);
        }
    } catch (error) {
        outputContainer.innerHTML = `
            <p class="error-message">Lỗi khi chạy chương trình:</p>
            <p>${error.message}</p>
        `;
    }
}

// ==================== PHẦN YOUTUBE PLAYER NÂNG CẤP ====================

// Search YouTube videos, channels, or playlists
async function searchYoutubeVideos() {
    const query = youtubeSearchInput.value.trim();
    if (!query) {
        alert('Vui lòng nhập từ khóa tìm kiếm!');
        return;
    }

    youtubeResultsContainer.innerHTML = 'Đang tìm kiếm...';
    youtubeNextPageToken = '';
    youtubePrevPageToken = '';
    allYoutubeVideos = [];
    allYoutubeChannels = [];
    allYoutubePlaylists = [];

    try {
        if (currentSearchType === 'url') {
            await handleYoutubeUrl(query);
        } else {
            const endpoint = getEndpointForSearchType(currentSearchType, query);
            const response = await fetch(endpoint);
            const data = await response.json();
            
            processYoutubeResults(data, currentSearchType);
        }
    } catch (error) {
        console.error('Lỗi khi tìm kiếm:', error);
        youtubeResultsContainer.innerHTML = '<p>Đã xảy ra lỗi khi tìm kiếm. Vui lòng thử lại sau.</p>';
        youtubeViewMoreLess.style.display = 'none';
        youtubePagination.style.display = 'none';
    }
}

function getEndpointForSearchType(type, query) {
    const baseUrl = `https://www.googleapis.com/youtube/v3/`;
    const encodedQuery = encodeURIComponent(query);
    
    switch(type) {
        case 'video':
            return `${baseUrl}search?part=snippet&maxResults=50&type=video&q=${encodedQuery}&key=${YOUTUBE_API_KEY}`;
        case 'channel': // Thêm loại tìm kiếm kênh
            return `${baseUrl}search?part=snippet&maxResults=50&type=channel&q=${encodedQuery}&key=${YOUTUBE_API_KEY}`;
        case 'playlist': // Thêm loại tìm kiếm playlist
            return `${baseUrl}search?part=snippet&maxResults=50&type=playlist&q=${encodedQuery}&key=${YOUTUBE_API_KEY}`;
        default:
            return `${baseUrl}search?part=snippet&maxResults=50&type=video&q=${encodedQuery}&key=${YOUTUBE_API_KEY}`;
    }
}

async function handleYoutubeUrl(url) {
    try {
        const videoId = extractVideoId(url);
        const playlistId = extractPlaylistId(url);
        const channelId = extractChannelId(url);
        
        if (videoId) {
            playYoutubeVideo(videoId);
            youtubeResultsContainer.innerHTML = '<p>Đang phát video từ URL...</p>';
        } else if (playlistId) {
            const endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`;
            const response = await fetch(endpoint);
            const data = await response.json();
            processYoutubeResults(data, 'playlistItems'); // Chỉ định type là 'playlistItems'
        } else if (channelId) {
            // Khi URL là kênh, tìm kiếm các video của kênh đó
            const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&channelId=${channelId}&order=date&type=video&key=${YOUTUBE_API_KEY}`;
            const response = await fetch(endpoint);
            const data = await response.json();
            processYoutubeResults(data, 'video'); // Chỉ định type là 'video'
        } else {
            youtubeResultsContainer.innerHTML = '<p>URL YouTube không hợp lệ. Vui lòng kiểm tra lại.</p>';
        }
    } catch (error) {
        console.error('Lỗi khi xử lý URL:', error);
        youtubeResultsContainer.innerHTML = '<p>Đã xảy ra lỗi khi xử lý URL. Vui lòng thử lại sau.</p>';
    }
}

// Hàm trích xuất ID từ các loại URL YouTube
function extractVideoId(url) {
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return (match && match[1].length === 11) ? match[1] : null;
}

function extractPlaylistId(url) {
    const regExp = /[&?]list=([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

function extractChannelId(url) {
    const regExp = /(?:youtube\.com\/(?:channel\/|user\/|c\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

// Xử lý kết quả YouTube
function processYoutubeResults(data, type) {
    if (type === 'video' || type === 'playlistItems') {
        allYoutubeVideos = data.items ? data.items.filter(item => item.id.kind === 'youtube#video' || (item.snippet.resourceId && item.snippet.resourceId.kind === 'youtube#video')) : [];
        youtubeNextPageToken = data.nextPageToken || '';
        youtubePrevPageToken = data.prevPageToken || '';
    } else if (type === 'channel') {
        allYoutubeChannels = data.items ? data.items.filter(item => item.id.kind === 'youtube#channel') : [];
        youtubeNextPageToken = data.nextPageToken || '';
        youtubePrevPageToken = data.prevPageToken || '';
    } else if (type === 'playlist') {
        allYoutubePlaylists = data.items ? data.items.filter(item => item.id.kind === 'youtube#playlist') : [];
        youtubeNextPageToken = data.nextPageToken || '';
        youtubePrevPageToken = data.prevPageToken || '';
    }
    
    visibleVideos = 6; // Reset số lượng hiển thị khi có kết quả mới
    updateYoutubeResultsDisplay();
}

// Hiển thị kết quả YouTube
function updateYoutubeResultsDisplay() {
    youtubeResultsContainer.innerHTML = '';
    
    let itemsToDisplay = [];
    if (currentSearchType === 'video' || currentSearchType === 'url') {
        itemsToDisplay = allYoutubeVideos;
    } else if (currentSearchType === 'channel') {
        itemsToDisplay = allYoutubeChannels;
    } else if (currentSearchType === 'playlist') {
        itemsToDisplay = allYoutubePlaylists;
    }

    if (itemsToDisplay.length === 0) {
        youtubeResultsContainer.innerHTML = '<p>Không tìm thấy kết quả nào.</p>';
        youtubeViewMoreLess.style.display = 'none';
        youtubePagination.style.display = 'none';
        return;
    }
    
    const slicedItems = itemsToDisplay.slice(0, visibleVideos);
    
    slicedItems.forEach(item => {
        if (item.id.kind === 'youtube#channel') {
            const channelId = item.id.channelId;
            const title = item.snippet.title;
            const thumbnail = item.snippet.thumbnails.medium.url;
            const description = item.snippet.description;
            
            const channelItem = document.createElement('div');
            channelItem.classList.add('youtube-channel-item');
            channelItem.innerHTML = `
                <img src="${thumbnail}" alt="${title}">
                <div class="youtube-channel-info">
                    <h4>${title}</h4>
                    <p>${description.substring(0, 100)}${description.length > 100 ? '...' : ''}</p>
                </div>
            `;
            channelItem.addEventListener('click', () => {
                // Khi click vào kênh, hiển thị video của kênh đó
                youtubeSearchInput.value = `https://www.youtube.com/channel/${channelId}`;
                currentSearchType = 'url';
                youtubeTabs.forEach(t => t.classList.remove('active'));
                document.querySelector('.youtube-tab[data-type="url"]').classList.add('active');
                youtubeSearchInput.placeholder = getPlaceholderForSearchType(currentSearchType);
                searchYoutubeVideos();
            });
            youtubeResultsContainer.appendChild(channelItem);
        } else if (item.id.kind === 'youtube#playlist') {
            const playlistId = item.id.playlistId;
            const title = item.snippet.title;
            const thumbnailUrl = item.snippet.thumbnails.high.url;
            const channelTitle = item.snippet.channelTitle;

            const playListItem = document.createElement('div');
            playListItem.classList.add('youtube-video-item'); // Dùng chung style với video item
            playListItem.innerHTML = `
                <img src="${thumbnailUrl}" alt="${title}">
                <div class="title">Playlist: ${title}</div>
                <div class="channel">${channelTitle}</div>
            `;
            playListItem.addEventListener('click', () => {
                // Khi click vào playlist, phát video đầu tiên hoặc liệt kê các video trong playlist
                youtubeSearchInput.value = `https://www.youtube.com/playlist?list=${playlistId}`;
                currentSearchType = 'url';
                youtubeTabs.forEach(t => t.classList.remove('active'));
                document.querySelector('.youtube-tab[data-type="url"]').classList.add('active');
                youtubeSearchInput.placeholder = getPlaceholderForSearchType(currentSearchType);
                searchYoutubeVideos();
            });
            youtubeResultsContainer.appendChild(playListItem);
        } else {
            // Hiển thị video
            const videoId = item.id.videoId || (item.snippet.resourceId ? item.snippet.resourceId.videoId : null);
            if (!videoId) return;
            
            const title = item.snippet.title;
            const thumbnailUrl = item.snippet.thumbnails.high.url;
            const channelTitle = item.snippet.channelTitle;

            const videoItem = document.createElement('div');
videoItem.classList.add('youtube-video-item');
videoItem.innerHTML = `
    <img src="${thumbnailUrl}" alt="${title}">
    <div class="title">${title}</div>
    <div class="channel">${channelTitle}</div>
`;
videoItem.addEventListener('click', (e) => {
    // Only play video if not clicking on download button
    if (!e.target.classList.contains('youtube-download-btn')) {
        playYoutubeVideo(videoId);
        
        // Remove any existing download buttons first
        const existingBtns = videoItem.querySelectorAll('.youtube-download-btn');
        existingBtns.forEach(btn => btn.remove());
        
        // Create new download button
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'youtube-download-btn';
        downloadBtn.textContent = 'Tải xuống';
        downloadBtn.onclick = (e) => {
            e.stopPropagation();
            downloadYoutubeVideo(videoId, title);
        };
        videoItem.appendChild(downloadBtn);
    }
});
youtubeResultsContainer.appendChild(videoItem);
        }
    });
    
    // Hiển thị nút xem thêm/thu gọn
    if (itemsToDisplay.length > 6) {
        youtubeViewMoreLess.style.display = 'flex';
        youtubeViewMore.style.display = visibleVideos >= itemsToDisplay.length ? 'none' : 'block';
        youtubeViewLess.style.display = visibleVideos <= 6 ? 'none' : 'block';
    } else {
        youtubeViewMoreLess.style.display = 'none';
    }
    
    // Hiển thị nút phân trang nếu có
    if (youtubeNextPageToken || youtubePrevPageToken) {
        youtubePagination.style.display = 'flex';
        youtubePrevPage.disabled = !youtubePrevPageToken;
        youtubeNextPage.disabled = !youtubeNextPageToken;
    } else {
        youtubePagination.style.display = 'none';
    }
}

// Hiển thị thêm video
function showMoreVideos() {
    visibleVideos += 10;
    updateYoutubeResultsDisplay();
}

// Thu gọn video
function showLessVideos() {
    visibleVideos = 6;
    updateYoutubeResultsDisplay();
}

// Tải trang tiếp theo
async function loadNextPage() {
    if (!youtubeNextPageToken) return;
    
    try {
        const endpoint = `${getEndpointForSearchType(currentSearchType, youtubeSearchInput.value)}&pageToken=${youtubeNextPageToken}`;
        const response = await fetch(endpoint);
        const data = await response.json();
        processYoutubeResults(data, currentSearchType); // Truyền type để xử lý đúng
    } catch (error) {
        console.error('Lỗi khi tải trang tiếp theo:', error);
    }
}

// Tải trang trước
async function loadPrevPage() {
    if (!youtubePrevPageToken) return;
    
    try {
        const endpoint = `${getEndpointForSearchType(currentSearchType, youtubeSearchInput.value)}&pageToken=${youtubePrevPageToken}`;
        const response = await fetch(endpoint);
        const data = await response.json();
        processYoutubeResults(data, currentSearchType); // Truyền type để xử lý đúng
    } catch (error) {
        console.error('Lỗi khi tải trang trước:', error);
    }
}

// Phát video YouTube
function playYoutubeVideo(videoId) {
    if (!videoId) return;
    
    // Kiểm tra nếu videoId là URL đầy đủ
    const extractedId = extractVideoId(videoId);
    if (extractedId) {
        videoId = extractedId;
    }
    
    youtubeVideoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`; // Sửa URL nhúng
    youtubeVideoPlayer.scrollIntoView({ behavior: 'smooth' });
}

function downloadYoutubeVideo(videoId, title) {
    // These services provide direct download links
    const services = [
        {
            name: "Y2mate",
            url: `https://www.y2mate.com/youtube/${videoId}`
        },
        {
            name: "SaveFrom",
            url: `https://en.savefrom.net/#url=https://youtube.com/watch?v=${videoId}`
        },
        {
            name: "YoutubePP",
            url: `https://www.youtubepp.com/watch?v=${videoId}`
        }
    ];
    
    // Create a modal to show download options
    const downloadModal = document.createElement('div');
    downloadModal.style.position = 'fixed';
    downloadModal.style.top = '0';
    downloadModal.style.left = '0';
    downloadModal.style.width = '100%';
    downloadModal.style.height = '100%';
    downloadModal.style.backgroundColor = 'rgba(0,0,0,0.7)';
    downloadModal.style.display = 'flex';
    downloadModal.style.justifyContent = 'center';
    downloadModal.style.alignItems = 'center';
    downloadModal.style.zIndex = '2000';
    
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.maxWidth = '500px';
    modalContent.style.width = '90%';
    
    modalContent.innerHTML = `
        <h3 style="color: #e74c3c; margin-bottom: 15px;">Tải xuống: ${title}</h3>
        <p style="margin-bottom: 20px;">Chọn dịch vụ tải xuống:</p>
        <div style="display: flex; flex-direction: column; gap: 10px;">
            ${services.map(service => `
                <a href="${service.url}" target="_blank" style="
                    padding: 10px;
                    background-color: #2ecc71;
                    color: white;
                    text-align: center;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                " onmouseover="this.style.backgroundColor='#27ae60'" 
                 onmouseout="this.style.backgroundColor='#2ecc71'">
                    ${service.name}
                </a>
            `).join('')}
        </div>
        <button style="
            margin-top: 20px;
            padding: 10px;
            width: 100%;
            background-color: #e74c3c;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        " onclick="this.parentNode.parentNode.remove()">
            Đóng
        </button>
    `;
    
    downloadModal.appendChild(modalContent);
    document.body.appendChild(downloadModal);
    
    // Close modal when clicking outside
    downloadModal.addEventListener('click', (e) => {
        if (e.target === downloadModal) {
            downloadModal.remove();
        }
    });
}

// Initialize the page
window.addEventListener('DOMContentLoaded', init);
