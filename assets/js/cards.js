$(function () {
    get_random_cards();

    $("li").click(function () {
        var url = "card.html?number=" + $(this).attr("id");
        loading(url);
    });
});

function get_random_cards() {
    var numbers = Array.from({ length: 22 }, (_, i) => i);
    shuffle_array(numbers);

    var html = "<ul>";
    $.each(numbers, function (index, value) {
        html += "<li id='" + value + "'><img src='https://lh3.googleusercontent.com/fife/ALs6j_Hlmabji31G80Ft1XfNI-WsEnPhNujGrpi5x3pmRfDTptUd3xxWoVZO7EdfLUWGnp31yQxeKGwvbRx7TaSzxn8vg9ZnO9TyhCF61XGhVx82lN8FIpeuy9vrVPgTWyJU08_93B_pYZfTvYzSz2McPbGh6reU_ERgrA6BPCNsrWCXT7nW3cLH9izHXsOViWOTgDt_i_rMMrF2eznQIr9RHjiPr1mHGul1CIylhBN4y96ntasHapvyO8iK4n_HfXsa7GCysrcNvn68f8amaLbvFfT_APULwyyveLspprRDcOz9s5ZdNr0CjaNBPYFBpKaFiGMvN1YnJuwqmwhR_Mp_C9OzbKmn7rHM14eDXRyiLm5ODakzmLMqrr5pT5MxA1bo8CH9wnLWW9jACuLtwbxH-h_4Z9s8u8qVyZJvPlWyHIg3EH-fs_7GFiODrrXUbpEU4_tibIka3MTa_KjqHMZ84n_hJHFJACChYtDMW04nsDEYHKcI0-FAspovMCJZBcqLa4DVYfbLvw_KBrng0y6uXbiIsDBrLzPXYt9-C8XqYFy8w5ckY-XANsNAs2t-SweYYztda3sRuo61yoP282_d3H3HaDGB3mSDl847nykYo0sPHPU285C-JHTkjSSK28-EPzdvxyi2HNbZaDHjeKCPc_YX2KfqEAjXvVu4WD7QwgXtWOASrE9YZomsIEsN5zSbeGukVC0xcYe-JJ1fx1HRKmPR-z697h_a0WM5JQ4J1L9AQECMs1jR6Xt1QKLzHu9DJwYV5kGH2NqX4N_M8KbwCqzTRI7QaNYCdbINwDhMonskk3JcfCHOw-DpXyl0DekCXHx9U-PyU7TYRUiTEotFmfgcoVSLgGd7Fs31FvUZSdqqukwkq1D0w22WPhjfIlTChnhvDVmOyewnsJ15wR10VcqsWjUBGLeDk__eixzEC7j-Wmk1A0LGyTZ9-7lV2fmVnse7lBZ5j5mcPcukctPRGcljk_kCF4P1IQgYNUc5hpiwnrYjYKKOblL_s3cDRfAuWIa8Q3-nUZylxfs1FwU2Ps02ATizncvmontJVHkxF8FjneAO91cM_sXfUl21ODitRAboqmusDA_kUTv9QdqQnRTZxuzPeUE2ag5EvB2lJinDK9Rvw3Ua0ZAcw-IG8kTycUZ5aYP9Rywx-G7VYPtpopsxOdVOuKX6qFarWN2zasTA-syt56woOABaDwxPrd8jpkSLtF_8X_JNWjiPYjLq4p-Tjypkl4s7eAtnWtlNLOjRQgVL4MG0xj8_WlxyNzAyGd5gzTvmGTl6oeVl16sLok1RMrmMTFRjxEgxeeK_TGI2dPA2SXf7W1j962hI8GJsmF4G7og8diUe0A9ZDHCNcS13pC5T4PeL8N5VXJsjubALW9dedvbOF8TeGo8daLly6gOMH-Nw6E5AyRmit3RXoVfSzfXlvce1D0YbxdVGVhLuHUXfo3uZHO0a1JtdR8NrAZZ5te5cNCsEGsxxwRZRRxRvLN5oMeOXnTSp0SRigZpJbZROWUx6nrt6S7NUvtZ4SJ7sWANcbbECmy7VpemOkW8mS-7qWlO_xdMjDEmFSSvYfPZRpipqK6Jqu06TMGi65k7Z-UJXCCNTzTbVf20V_GJQ4wlvoBmAZOuFatYtbYuoIUgl87wdcwou'></li>";
        if (index != 0 && (index + 1) % 11 == 0) html += "</ul><ul>";
    });
    html += "<ul>";
    $(".box").append(html);
}

function shuffle_array(array) {
    array.sort(() => Math.random() - 0.5);
}