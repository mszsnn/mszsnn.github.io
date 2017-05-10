/**
 * Created by 李雨健 on 2017/4/29.
 */
$(document).ready(function(){
    //歌词界面的滑动实现
    var myScroll;
    myScroll = new IScroll('#wrapper');

    //歌曲的播放
    var database=[
        {name:'平凡之路',id:'song3',aut:'朴树',
            src:'../font/L-font/1.mp3',
            bigpic:'../bigpic/3.jpg'},
        {name:'迷宫',id:'song4',aut:'王若琳',
            src:'../font/L-font/3.mp3',
            bigpic:'../bigpic/4.jpg'},
        {name:'送别',id:'song6',aut:'李叔同 弘一大师',
            src:'../font/L-font/2.mp3',
            bigpic:'../bigpic/5.jpg'}
    ];
    var audios=document.querySelector('audio');
    var playbtn=document.querySelector('.play');
    var prevbtn=document.querySelector('.prev');
    var nextbtn=document.querySelector('.next');

    playbtn.addEventListener('touchend',function(){
        if(audios.paused){
            audios.play();
            playbtn.classList.remove('icon-icon-test2');
            playbtn.classList.add('icon-icon-test1');
        }else{
            audios.pause();
            playbtn.classList.remove('icon-icon-test1');
            playbtn.classList.add('icon-icon-test2');
        }
    })







})


