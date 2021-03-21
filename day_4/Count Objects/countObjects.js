
function getCount(objects) {
    let count = 0;
    
    objects.forEach(obj => {
        if (obj.x == obj.y)
            count += 1;
    });
    
    return count;
}

