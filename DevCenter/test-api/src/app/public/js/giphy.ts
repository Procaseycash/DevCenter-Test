declare const $: any;
$(function () {
    let storeGiphies = JSON.parse(localStorage.getItem('giphies'));
    let giphies = (storeGiphies) ? storeGiphies : [];
    displayChatBox();
    /**
     * This is to open chat box
     */
    $("#addClass").click(function () {
        $('#sidebar_secondary').addClass('popup-box-on');
    });

    /**
     * This is used to close chat box
     */
    $("#removeClass").click(function () {
        $('#sidebar_secondary').removeClass('popup-box-on');
    });


    /**
     * Show chat box
     */
    function displayChatBox(resp?: any) {
        if (resp) {
            storeGiphies = JSON.parse(localStorage.getItem('giphies'));
            giphies = (storeGiphies) ? storeGiphies : [];
            if (resp.data.constructor === Object && resp.data['images']) {
                giphies.push(resp);
                localStorage.setItem('giphies', JSON.stringify(giphies));
            }
        }
        let contents = '';
        if (giphies.length === 0) {
            return;
        }
        giphies.forEach(function (giphy, i) {
            console.log('giphy', giphy);
            const move = (i % 2 === 0) ? 'chat_message_wrapper' : 'chat_message_wrapper chat_message_right';
            const img = (i % 2 === 0) ? 'public/img/business.png' : 'public/img/consumer.png';
            const html = `<div class="${move}">
               <div class='chat_user_avatar'>
          <a href='https://www.linkedin.com/in/kazeem-olanipekun-66a433a0/' target='_blank'>
              <img alt='Kazeem' title='Kazeem Olanipekun' src="${img}" class='md-user-image'>
               </a>
             </div>
             <ul class='chat_message'>
               <li>
                <p>
             <div align='center'>
               <img src="${giphy.data.images.downsized.url}" class='img-thumbnail' width="${giphy.data.images.downsized.width}" height="${giphy.data.images.downsized.height}" alt=''>
               </div>
                <span class='chat_message_time'>13:34</span>
             </p>
              </li>
              </ul>
                </div>`;

            contents += html;

        });

        $('#inject').html(contents);
    }


    /**
     * This is used to active succes message
     * @param resp
     */
    function success(resp) {
        console.log('resp=', resp);
        displayChatBox(resp);

    }

    /**
     * This is used to show error message
     * @param err
     */
    function error(err) {
        console.log('err=', err);
    }

    /**
     * This is used to listen to button click
     */
    $('#submit_message').on('keypress', function (e) {
        if (e.keyCode == 13) {
            makeCalls();
        } else {
            console.log('hhhh');
        }
    });

    $("#btn-click").click(function () {
        makeCalls();
    });

    function makeCalls() {
        let input = $('#submit_message').val();
        console.log('send=', input);
        get('/giphy/search?q=' + input).then(success, error);
    }

});