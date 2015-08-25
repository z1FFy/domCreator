/**
 * Created by denis.kushenko on 27.07.2015.
 *
 *  - Creating html DOM elements online
 *
 */

function dbg(variable) {
    console.log(variable);
}


$(document).ready(function() {
    app = new coreJS('MyApp');
    elemsCount = 0;
    $('.addElems button').click(function() {
        elemsCount++;
        var thisType = $(this).attr('typeelem');
        var typeInsert = $('input[name=typeInsert]:checked').attr('id');
        var objName = 'elem'+elemsCount;
        app.createElem({
            main : {
                objName: objName, tag: thisType, innerHTML: '',
                typeInsert : typeInsert,
                attrObj : {
                    attr: 'numElem',
                    attrVal: elemsCount
                }
            },
            params : {
                runRender : true
            }
        });
        $('input[name="typeInsert"]').each(function() {
            if ($(this).attr('checked')) {
                dbg($(this).attr('id'));
            }
        });
        app.run();
    });

    $('body').on('click','.cjs',function(){
        var thisNum = $(this).attr('numelem');
        thisElem = app.elems['elem'+thisNum];
        $('.editElem #width').val($(thisElem).css('width'));
        $('.editElem #height').val($(thisElem).css('height'));
        $('.editElem #background-color').val($(thisElem).css('background-color'));
    });


    $('#editGo').click(function(){
        $(thisElem).css('width',$('.editElem #width').val());
        $(thisElem).css('height',$('.editElem #height').val());
        $(thisElem).css('background-color',$('.editElem #background-color').val());
    });

});