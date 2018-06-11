// 메인 서버
var express = require('express');
var app = express();
var path = process.cwd();
<<<<<<< HEAD
var blockFunc = require( path + '/function/blockFunc' );
var dbFunc = require( path + '/function/dbFunc' );
var view = require( path + '/function/view' );


// <--------------------- server Start ----------------------->

//1.등록 페이지를 실행합니다.
app.get('/set', function(req, res){
    res.sendFile(__dirname + '/public/setpolling.html');
});

// 1. 투표장을 생성합니다.
app.post('/public/finishset', function(req, res){
    var info = [req.body.user_name, 
                req.body.start_regist_period,
                req.body.end_regist_period,
                req.body.votedate,
                req.body.place_contents,
                req.body.start_vote_time,
                req.body.end_vote_time];

    blockFunc.setPollingPlace(function(placeid){

        dbFunc.InsertPlaceInfo(placeid, info,function(result){
            res.send(result);
        });
    });
});

// 2. 후보자를 등록합니다.
app.get('/setCandidate', function (req, res) {
    var info = [req.body.placeid, req.body.candidatename];
    
    blockFunc.setCandidate(info[0], function(candidateid){
        console.log(candidateid)
        dbFunc.InsertCandidateInfo(candidateid, info, function(result){
            res.send(result);
        })
    })
});


// 3. 등록된 투표장을 볼 수 있습니다.
app.get('/getAllplace', function (req, res) {
    blockFunc.placeLength(function(length){
        blockFunc.searchList(length, res)
    })
});

// 4. 입력한 투표장의 모든 후보자를 볼 수 있습니다.
app.get('getAllCandidate', function (req, res){
    blockFunc.getAllCandidate(1,1);
})


// 5. 투표권을 행사합니다.
app.get('/setVote', function (req, res) {  
    var placeid = req.param('placeid');
    var candidateid = req.param('candidateid');
    var phone = req.param('phone');

    blockFunc.setVote(placeid, candidateid, phone, function(jsonData) {
        res.json(jsonData);
    });
});

// 6. 개표합니다.
app.get('/getCounting', function (req, res) {
    blockFunc.getCounting('testestestes');
});

// 7. 투표했는지 여부를 확인합니다.
app.get('/getCheckVoted', function (req, res) {
    var placeid = req.param('placeid');
    var phone = req.param('phone');

    blockFunc.getCheckVoted(placeid, phone, function(jsonData) {
        res.json(jsonData);
    });
});

// 8. 투표를 시작합니다. (정해진 기간동안 투표권을 행사할 수 있습니다.)
app.get('/setVoteStart', function (req, res) {
    //var placeid = req.param('placeid');

    blockFunc.setVoteStart(0, function(jsonData){
        res.json(jsonData);
    });
});

// 9. 투표를 종료합니다. (투표권을 더 이상 행사할 수 없습니다.)
app.get('/setVoteEnd', function (req, res) {
    //var placeid = req.param('placeid');

    blockFunc.setVoteEnd(0, function(jsonData){
        res.json(jsonData);
    });
});

=======
>>>>>>> upstream/master

// app과 연동되는 라우터
var appRouter = require( path + '/routes/appRouter');
app.use('/app', appRouter);

// web과 연동되는 라우터
var webRouter = require( path + '/routes/webRouter');
app.use('/web', webRouter);

app.listen(4210, function () {
  console.log('eth server start: 4210');
});
