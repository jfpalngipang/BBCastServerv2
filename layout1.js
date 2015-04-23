function removeTile() {
    $('.grid-stack-item').remove();
    
}
function addNew() {
    var serialization = [
        {x: 0, y: 0, width: 9, height: 7, id:'video'},
        {x: 9, y: 0, width: 3, height: 6, id:'image-carousel'},
        {x: 0, y: 7, width: 9, height: 3, id:'text-carousel'},
        {x: 9, y: 6, width: 3, height: 4, id:'social-carousel'}
        
    ];

    serialization = GridStackUI.Utils.sort(serialization);

    var grid = $('.grid-stack').data('gridstack');
    grid.remove_all();

    _.each(serialization, function (node) {
    
        var test = document.createElement('div');
        test.id = node.id;
        var cont = document.createElement('div');
        cont.className = "grid-stack-item-content";
        var player = document.createElement('div');
        player.id = 'player';
        cont.appendChild(player);
        test.appendChild(cont);
        grid.add_widget(test, 
        node.x, node.y, node.width, node.height   
        );
    });
       
}
function test1() {
    
    $('#text-carousel').slick({
        autoplay:true
    });
    $('#image-carousel').slick({
        autoplay:true
    });
    $('#social-carousel').slick({
        autoplay:true
    });
    

}


$(function () {
    var options = {
    };
    $('.grid-stack').gridstack(options);
});
