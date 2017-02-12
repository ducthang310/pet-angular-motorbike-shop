/**
 * Created by ducthang on 2/12/17.
 */
angular.module('myApp').factory('CartService', ['$http', function ($http) {

    /**
     * Add item to cart
     * @param item
     */
    var add = function (item) {

    };


    /**
     * Get all cart items
     * @returns {Array}
     */
    var list = function () {
        return [];
    };


    /**
     * Remove all cart items
     * @returns Boolean
     */
    var empty = function () {
        return true;
    };


    /**
     * Remove an item from cart
     * @param id
     * @returns {boolean}
     */
    var deleteItem = function (id) {
        return true;
    };


    /**
     * Checkout
     */
    var checkout = function () {
        return;
    };

    /**
     * Return number of cart item
     * @returns {number}
     */
    var count = function () {
        return 4;
    };

    return {
        add: add,
        list: list,
        empty: empty,
        deleteItem: deleteItem,
        checkout: checkout,
        count: count
    };
}]);