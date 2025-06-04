document.addEventListener("DOMContentLoaded", function () {
    // --- 画面要素を取得 ---
    const applicationScreen = document.getElementById("application-screen");
    const inboxScreen = document.getElementById("inbox-screen");
    const mailScreen = document.getElementById("mail-screen");
    const applyButton = document.getElementById("apply-button");
    const inputName = document.getElementById("input-name");
    const recipientNameElem = document.getElementById("recipient-name");
    const recipientNameDuplicateElem = document.getElementById("recipient-name-duplicate");

    // 追加：読み込み画面と受信リスト
    const loadingScreen = document.getElementById("loading-screen");
    const inboxList = document.getElementById("inbox-list");

    // ダミーの受信メール件名
    const extraMails = [
      "ご利用ありがとうございました",
      "今月のキャンペーン情報",
      "アンケートのお願い"
    ];

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

      // 申し込み画面→読み込み中
      applicationScreen.classList.add("hidden");
      loadingScreen.classList.remove("hidden");

      // 3秒後に受信トレイをセットアップ
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
        // 既存リストをクリア
        inboxList.innerHTML = "";

        // ダミーのメールを追加
        extraMails.forEach(subject => {
          const li = document.createElement("li");
          li.textContent = subject;
          inboxList.appendChild(li);
        });

        // 当選メールを追加
        const winLi = document.createElement("li");
        winLi.id = "open-winning-mail";
        winLi.textContent = "【重要】おめでとうございます！当選のお知らせ";
        inboxList.appendChild(winLi);

        // 受信トレイ表示
        inboxScreen.classList.remove("hidden");

        // 当選メールのクリック処理を再設定
        winLi.addEventListener("click", () => {
          inboxScreen.classList.add("hidden");
          mailScreen.classList.remove("hidden");
        });
      }, 3000);
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
