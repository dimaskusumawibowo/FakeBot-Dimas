const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const main = document.getElementsByClassName("main");

let init = 0;

const botArray = (data) => {
  return [
    `Halo semuanya, selamat datang di Dimasbot, Siapa Nama Anda ?`,
    `Halo ${data?.nama}, Senang bisa kenal dengan anda, btw, Umur Berapa nih ?`,
    `oh ${data?.usia}, segitu ya, Btw, kira - kira hobinya apa nih ?`,
    `oh ${data?.hobi}, sama dong, Dimasbot juga suka ${data?.hobi}, btw punya pacar nggak ?`,
    `oh ${data?.pacar}, asik banget dong ya!!, yaudah kalo gitu Dimasbot pamit ya?`,
  ];
};

let userData = [];
pertanyaan.innerHTML = botArray()[0];

const bot = () => {
  if (jawaban.value.length < 1)
    return Swal.fire({
      icon: "error",
      title: "Kesalahan",
      text: "Data Harus di Isi",
    });
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finish();
  } else {
    botend();
  }
};

const botDelay = (jawabanUser) => {
  loaders.style.display = "block";
  main[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botArray(jawabanUser)[init];
    loaders.style.display = "none";
    main[0].style.filter = "none";
  }, [1000]);
  userData.push(jawaban.value);
  jawaban.value = "";
};

const finish = () => {
  pertanyaan.innerHTML = `Thanks ya ${userData[0]} udah main ke Dimasbot 😉, semoga kita bisa ${userData[2]} bareng yaah.. 😊`;
  jawaban.value = "Siap, Thanks Juga";
};

const botend = () => {
  window.location.reload();
};
