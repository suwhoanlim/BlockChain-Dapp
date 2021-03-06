//
//  Data.swift
//  BVC
//
//  Created by kimun on 2018. 6. 17..
//  Copyright © 2018년 Yalantis. All rights reserved.
//

import Foundation

struct PlaceInfo {
    var placeid: Int
    var name: String
    var period: Period
    var contents: String
    var isStarted: Int
    var imageURL: String
    
    init(placeid: Int, name: String, period: Period, contents: String, isStarted: Int, imageURL: String) {
        self.placeid = placeid
        self.name = name
        self.period = period
        self.contents = contents
        self.isStarted = isStarted
        self.imageURL = imageURL
    }
}

struct Period {
    var start_regist_period: String
    var end_regist_period: String
    var votedate: String
    var start_vote_time: String
    var end_vote_time: String
    
    init(start_regist_period: String, end_regist_period: String, votedate:String, start_vote_time: String, end_vote_time: String) {
        self.start_regist_period = start_regist_period
        self.end_regist_period = end_regist_period
        self.votedate = votedate
        self.start_vote_time = start_vote_time
        self.end_vote_time = end_vote_time
    }
}

struct CandidateInfo {
    var candidateid: String
    var name: String
    var wantvote: String
    var imageURL: String
    var pdfURL: String
    
    init(candidateid: String, name: String, wantvote: String, imageURL: String, pdfURL: String) {
        self.candidateid = candidateid
        self.name = name
        self.wantvote = wantvote
        self.imageURL = imageURL
        self.pdfURL = pdfURL
    }
}

struct CountingInfo {
    var name: String
    var placeid: String
    var candidateid: String
    var voteCount: Int
    var imageURL: String
    
    init(name: String, placeid: String, candidateid: String, voteCount: Int, imageURL: String) {
        self.name = name
        self.placeid = placeid
        self.candidateid = candidateid
        self.voteCount = voteCount
        self.imageURL = imageURL
    }
}

struct UserInfo {
    var selectPlaceid: String?
    var selectCandidateid: String?
    var phone: String?
    var name: String?
    var transactionAddress: String?
    
    init(selectPlaceid: String?, selectCandidateid: String?, phone: String?, name: String?, transactionAddress: String?){
        self.selectPlaceid = selectPlaceid
        self.selectCandidateid = selectCandidateid
        self.phone = phone
        self.name = name
        self.transactionAddress = transactionAddress
    }
}


var candidateInfo: [CandidateInfo] = []
var userInfo: UserInfo = UserInfo(selectPlaceid: nil, selectCandidateid: nil, phone: nil, name: nil, transactionAddress: nil)
