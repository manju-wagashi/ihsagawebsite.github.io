const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子供を全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
    while (element.firstChild) { //子供の要素がある限り削除
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick = function() {
    const userName = userNameInput.value;

    if (userName.length === 0) { // 名前が空の時は処理を終了する
        return;
    }

    // 診断結果表示エリアの作成
    removeAllChildren(resultDivided);

    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    //ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
        + encodeURIComponent('ハードルが低すぎるあなたの良いところ診断')
        + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href',hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text',result);
    anchor.innerText = 'Tweet #ハードルが低すぎるあなたの良いところ診断';
    tweetDivided.appendChild(anchor);

    twttr.widgets.load();
};
var answers = [
    '{userName}の良いところは…多分なんかあります。そんなに気を落とさないでください。{userName}。',
    '{userName}の良いところは安易にこう言った診断を信用しないところです。{userName}の思っている通り、これは所詮プログラムです。',
    '{userName}の良いところは息をしているところです。{userName}は普通、息をしなければ生きていられません。',
    '{userName}の良いところは地球人であるところです。{userName}が宇宙人ではないおかげで、意思疎通ができます。',
    '{userName}の良いところは命に限りがあるところです。{userName}が不死身だと、人類の常識が覆ってしまいます。。',
    '{userName}の良いところは戦闘民族ではないところです。{userName}と戦わずにすむのは、非常に助かります。',
    '{userName}の良いところは排水溝に住んでいるどこぞのピエロではないところです。ハァイ、{userName}。風船いるかい？',
    '{userName}の良いところはこの診断を受けてくれるところです。{userName}のおかげで、この意味わからん診断にも存在意義ができました。',
    '{userName}の良いところは水分を取るところです。{userName}の見た目がミイラではないことに、周りは安心したでしょう。',
    'おっ…お前は{userName}…⁉︎。馬鹿な…{userName}は死んだはずじゃ…⁉︎',
    '{userName}の良いところは身長が6cmを下回っていないところです。もしそうなら、多くの人は{userName}を虫か何かだと勘違いするでしょう。いやしねぇな。',
    '{userName}の良いところは犬、猿、雉を連れていないところです。もしそうなら、周囲は{userName}を桃太郎だと認識せざるを得ないので、とても困惑してしまいます。',
    '{userName}の良いところは液体ではないところです。液体ではないことで、{userName}は地面に染み込んでしまうことはありません。',
    '{userName}の良いところは誕生日が2月30日ではないところです。もしそうなら{userName}、どの時空から来たのか詳しく聞かせてください。',
    '{userName}の良いところは唐突に道端の石に話しかけないところです。そんなことをしようものなら、{userName}は多くの人から避けられることになります。',
    '{userName}の良いところは好物がマンモスの丸焼きではないところです。もしそうなら、{userName}は一生大好物を食べられないことになります。'
];


/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName){
   //全文字のコード番号を取得してそれを足し合わせる
   let sumOfcharCode = 0;
   for (let i = 0; i < userName.length; i++) {
       sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
   }

   //文字のコード番号の合計を回数の数で割って添字の数値を求める
   let index = sumOfcharCode % answers.length;
   let result = answers[index];
   if (userName == 'hello' ){
    result ='{userName}.'
    } else if(userName == 'こんにちは'){
        result = '{userName}。'
    } else if(userName == 'こんばんは'){
        result = '{userName}。'
    } else if(userName == 'おはよう'){
        result = '{userName}ございます。'
    }else if(userName == 'おはようございます'){
        result = '{userName}。'
    }else if(userName == 'こんにちは。'){
        result = '{userName}'
    }else if(userName == 'こんばんわ。'){
        result = 'こんばんは。'
    }else if(userName == 'こんばんわ'){
        result = 'こんばんは。'
    }else if(userName == 'こんばんは。'){
        result = '{userName}'
    }else if(userName == 'おはよう。'){
        result = '{userName}'
    }else if(userName == 'おはようございます。'){
        result = '{userName}'
    }else if(userName == 'うぃーす'){
        result = 'こんにちは。'
    }else if(userName == 'うぃーす。'){
        result = 'こんにちは。'
    }else if(userName == '初めまして'){
        result = '{userName}。'
    }else if(userName == '初めまして。'){
        result = '{userName}'
    }else if(userName == 'はじめまして'){
        result = '{userName}。'
    }else if(userName == 'はじめまして。'){
        result = '{userName}'
    }else if(userName == 'こんちゃーす'){
        result = 'こんにちは。'
    }else if(userName == 'こんちゃーす。'){
        result = 'こんにちは。'
    }else if(userName == 'どうも'){
        result = 'こんにちは。'
    }else if(userName == 'どうも。'){
        result = 'こんにちは。'
    }else if(userName == 'よろしく'){
        result = '{userName}お願いします。'
    }else if(userName == 'よろしく。'){
        result = 'よろしくお願いします。'
    }else if(userName == 'good morning'){
        result = '{userName}.'
    }else if(userName == 'アンパンマン'){
        result = 'お、良いところに来たな{userName}。顔をよこしな。'
    }else if(userName == '桃太郎'){
        result = 'なんで{userName}がこんなところに⁉︎犬猿雉連れて昔話に帰りな！'
    }else if(userName == '髙橋瑞樹'){
        result = '奇しくも俺と同じ名前ですね！だからどうしたって話ですけどね！'
    }else if(userName == '浦島太郎'){
        result = '{userName}…落ち着いて聞いてくれ。ここはもうお前の時代じゃないんだ…玉手箱だけは絶対に開けたらダメだぞ…！'
    }else if(userName == '金太郎'){
        result = 'どこから迷い込んだか知らんけど、{userName}、君は熊とでも相撲してなさい。'
    }else if(userName == 'エボルト'){
        result = 'うん、{userName}。君は良い加減倒されようぜ。'
    }else if(userName == '猫'){
        result = 'ニャー！'
    }else if(userName == 'ネコ'){
        result = 'ニャー！'
    }else if(userName == 'まんじゅうくん'){
        result = '…なぜお前がその名前を知っている？'
    }
    else if(userName == '瓦分瓰'){
        result = 'なぜお前がその名前を知っている？'
    }


   //{userName}を名前に書き換える
   result = result.replace(/\{userName\}/g,userName);

   return result;
};