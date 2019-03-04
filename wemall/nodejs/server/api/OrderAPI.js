var request   = require('../net/request');
var Promise   = require('bluebird');
var config    = require('../config');
var ErrorCode = require('../model/ErrorCode');

/*
 * 今日订单数
 */
function getTodayOrderCount(req) {
	return new Promise(function(resolve, reject) {
		var url  = config.api.todayOrderCount;
		request.getJSON({
			client : req,
			uri    : url
		}, function(error, response, data) {
			if (data && data.errNo != ErrorCode.SUCCESS) {
				reject(data);
			} else if (!error && response.statusCode == 200 && data && data.errNo === ErrorCode.SUCCESS) {
				resolve(data.data);
			} else {
				reject(error);
			}
		});
	});
}

/*
 * 今日销售额
 */
function getTodaySale(req) {
	return new Promise(function(resolve, reject) {
		var url  = config.api.todayOrderSale;
		request.getJSON({
			client : req,
			uri    : url
		}, function(error, response, data) {
			if (data && data.errNo != ErrorCode.SUCCESS) {
				reject(data);
			} else if (!error && response.statusCode == 200 && data && data.errNo === ErrorCode.SUCCESS) {
				resolve(data.data);
			} else {
				reject(error);
			}
		});
	});
}

/*
 * 总订单数
 */
function getTotalOrderCount(req) {
	return new Promise(function(resolve, reject) {
		var url  = config.api.totalOrderCount;
		request.getJSON({
			client : req,
			uri    : url
		}, function(error, response, data) {
			if (data && data.errNo != ErrorCode.SUCCESS) {
				reject(data);
			} else if (!error && response.statusCode == 200 && data && data.errNo === ErrorCode.SUCCESS) {
				resolve(data.data);
			} else {
				reject(error);
			}
		});
	});
}

/*
 * 总销售额
 */
function getTotalSale(req) {
	return new Promise(function(resolve, reject) {
		var url  = config.api.totalSale;
		request.getJSON({
			client : req,
			uri    : url
		}, function(error, response, data) {
			if (data && data.errNo != ErrorCode.SUCCESS) {
				reject(data);
			} else if (!error && response.statusCode == 200 && data && data.errNo === ErrorCode.SUCCESS) {
				resolve(data.data);
			} else {
				reject(error);
			}
		});
	});
}

module.exports = {
	getTodayOrderCount : getTodayOrderCount,
	getTodaySale       : getTodaySale,
	getTotalOrderCount : getTotalOrderCount,
	getTotalSale       : getTotalSale
};