// mendapatkan elemen form login
const loginForm = document.querySelector('form');
const loginUsername = document.querySelector('input[name="user"]');
const loginPassword = document.querySelector('input[name="pass"]');
const rememberMe = document.querySelector('input[name="remember"]');

// mendapatkan data user dari local storage
let registerData = [];
if (localStorage.getItem('registerData')) {
  registerData = JSON.parse(localStorage.getItem('registerData'));
}

// event listener untuk saat form di submit
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // mencegah form untuk melakukan reload halaman

  // mencari data user dengan username dan password yang cocok
  const matchedUser = registerData.find(user => user.username === loginUsername.value && user.password === loginPassword.value);

  // jika ditemukan user dengan username dan password yang cocok
  if (matchedUser) {
    // memberi feedback ke user
    alert('Login berhasil!');

    // jika remember me dicentang, simpan data login di local storage
    if (rememberMe.checked) {
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
    }

    // redirect ke halaman utama
    window.location.href = 'halamanbaru.html';
  } else {
    // memberi feedback ke user jika tidak ditemukan user dengan username dan password yang cocok
    alert('Username atau password salah!');
  }

  // mereset nilai pada form
  loginUsername.value = '';
  loginPassword.value = '';
});

// event listener untuk tombol reset
document.querySelector('button[type="reset"]').addEventListener('click', function() {
  // mereset nilai pada form
  loginUsername.value = '';
  loginPassword.value = '';
  rememberMe.checked = false;
});

// cek apakah user telah login sebelumnya
if (localStorage.getItem('loggedInUser')) {
  // redirect ke halaman utama
  window.location.href = 'halamanbaru.html';
}
