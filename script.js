document.addEventListener("DOMContentLoaded", function () {
    // --- 画面要素を取得 ---
    const applicationScreen = document.getElementById("application-screen");
    const inboxScreen = document.getElementById("inbox-screen");
    const mailScreen = document.getElementById("mail-screen");
  
    const applyButton = document.getElementById("apply-button");
    const inputName = document.getElementById("input-name");
  
    const openWinningMail = document.getElementById("open-winning-mail");
    const backButton = document.getElementById("back-button");
  
    const recipientNameElem = document.getElementById("recipient-name");
    const recipientNameDuplicateElem = document.getElementById("recipient-name-duplicate");
  
    // --- 1) 「申し込む」ボタンを押したとき ---
    applyButton.addEventListener("click", () => {
      const name = inputName.value.trim();
      if (name === "") {
        alert("お名前を入力してください。");
        return;
      }
  
      // 本文中の宛名部分を動的に置き換える
      recipientNameElem.textContent = `${name} 様`;
      recipientNameDuplicateElem.textContent = `${name} 様`;
  
      // 申し込み画面を非表示 → 受信トレイ画面を表示
      applicationScreen.classList.add("hidden");
      inboxScreen.classList.remove("hidden");
    });
  
    // --- 2) 受信トレイ → メール本文 へ遷移 ---
    openWinningMail.addEventListener("click", () => {
      inboxScreen.classList.add("hidden");
      mailScreen.classList.remove("hidden");
    });
  
    // --- 3) メール本文 → 受信トレイ へ戻る ---
    backButton.addEventListener("click", () => {
      mailScreen.classList.add("hidden");
      inboxScreen.classList.remove("hidden");
    });
  });
  