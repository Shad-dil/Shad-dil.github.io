const passages_arr=[
    'They look so fine, and young, and wrapped',
    'The story of the family’s settlement is gritty and utterly unromanticized. Only the strong survive',
    'My one complaint is that I was left wanting more.  I wanted to read of Mary’s great-granddaughter Rachel and of the lives of other Andrews and Vincent descendants.',
    'A young Irish servant girl travels to Newfoundland in an attempt to build a new life for herself and her infant daughter in director John. M. Smith Gemini Award-winning miniseries,',
    'I was disconcerted, for I had broken away without quite seeing where I was going to'
]
//Results
let wpm=document.getElementById('wpm');
let total_word=document.getElementById('total_word');
let crt_word=document.getElementById('crt_word');
let err_word=document.getElementById('err_word');



const btn_value=document.getElementById('text_btn');
const textarea=document.getElementById('writebox');
const passage=document.getElementById('passages');
const results=document.getElementById('statatics');
let start_time;
let end_time;

//Event Listener on Start Btn
btn_value.addEventListener('click',function(){
   if(btn_value.innerText=='Start'){
       textarea.disabled=false;
       results.style.display='none';
       btn_value.innerText='Done';
       Start_game();
   }
   else if(btn_value.innerText=='Done'){
       btn_value.innerText='Start';
       textarea.disabled=true;
       results.style.display='block';
       End_game();
   }
});
//Defining Start Funation 
const Start_game=()=>{
    let random_passage=Math.floor(Math.random()*passages_arr.length);
    passage.innerText=passages_arr[random_passage];
    let date=new Date();
    start_time=date.getTime();
}

//Defining End Function
const End_game=()=>{
    let date=new Date();
    end_time=date.getTime();
    let totaltime=((end_time-start_time)/1000);
  let totalstr=textarea.value;
  let wordcount=Word_count(totalstr);
  textarea.value='';
  let speed=Math.round((wordcount/totaltime)*60);
wpm.innerText=speed;
let final_msg=comparewords(passage.innerText,totalstr);
crt_word.innerText=final_msg;
}

//Compare Function 
const comparewords=(str1,str2)=>{
    let count=0;
    let word1=str1.split(" ");
    let word2=str2.split(" ");
    word1.forEach(function(item,index){
if(item==word2[index]){
    count++;
}
    });
    let error_word=(word1.length-count);
    err_word.innerText=error_word;
    console.log(error_word)
    total_word.innerText=word1.length;
    console.log(word1.length)
    return count;
}
//Count No Of Words
const Word_count=(str)=>{
let response=str.split(" ").length;
return response;
}
