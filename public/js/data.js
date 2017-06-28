$(document).ready(()=>{

    const getAllHotels = function(){

        console.log('this is hotel api ')
        $.ajax({url:'/api/hotels', method: 'GET'})
            .then(hotels =>{
                const $ul = $('#hotel-choices')
                const listEls = hotels.map(hotel => {
                    var $option = $('<option></option>') // makes a new option tag
                        .text(hotel.name)
                        .val(hotel.id);
                })
                $ul.append(listEls);

            })
            .catch(error =>{
                console.error(error)
            })


    }


    getAllHotels()
})