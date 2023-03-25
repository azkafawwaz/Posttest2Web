// mendapatkan elemen-elemen form register
const registerForm = document.getElementById('register_form');
const registerUsername = document.getElementById('username');
const registerPassword = document.getElementById('password');

// mendapatkan tombol submit
const submitButton = document.getElementById('tombol_daftar');

// membuat array untuk menyimpan data register
let registerData = [];

// cek apakah ada data register di local storage
if(localStorage.getItem('registerData')) {
  registerData = JSON.parse(localStorage.getItem('registerData'));
}

// event listener untuk saat form di submit
registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // mencegah form untuk melakukan reload halaman

  // membuat objek user baru
  const newUser = {
    username: registerUsername.value,
    password: registerPassword.value
  }

  // menyimpan user baru ke dalam array registerData
  registerData.push(newUser);

  // menyimpan array registerData ke dalam local storage
  localStorage.setItem('registerData', JSON.stringify(registerData));

  // memberi feedback ke user
  alert('Registrasi berhasil!');
  window.location.href = "LOGIN.html";
  // mereset nilai pada form
  registerUsername.value = '';
  registerPassword.value = '';
});

// event listener untuk tombol reset
document.querySelector('button[type="reset"]').addEventListener('click', function() {
  // mereset nilai pada form
  registerUsername.value = '';
  registerPassword.value = '';
});
