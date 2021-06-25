﻿

$(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        var query = $('#query').val();
        $.ajax({
            url: '/Categories/Search',
            data: { 'query': query }
        }).done(function (data) {
            $('tbody').html('');
            var template = $('#hidden-template').html();
            console.log(data);
            $.each(data, function (i, val) {
                var temp = template;
                $.each(val, function (key, value) {
                    temp = temp.replaceAll('{' + key + '}', value);
                });
                $('tbody').append(temp);
            });
        });
    });

});