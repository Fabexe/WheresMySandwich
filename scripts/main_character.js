document.addEventListener('DOMContentLoaded', (event) => {
    const character = document.getElementById('character');
    const obstacle1 = document.getElementById('obstacle1');
    const obstacle2 = document.getElementById('obstacle2');
    let posX = window.innerWidth / 2;
    let posY = window.innerHeight / 2;
    const step = 20;

    // Initial position
    character.style.left = `${posX}px`;
    character.style.top = `${posY}px`;

    document.addEventListener('keydown', (event) => {
        let newPosX = posX;
        let newPosY = posY;
        
        switch (event.key) {
            case 'ArrowUp':
                newPosY -= step;
                break;
            case 'ArrowDown':
                newPosY += step;
                break;
            case 'ArrowLeft':
                newPosX -= step;
                break;
            case 'ArrowRight':
                newPosX += step;
                break;
        }
        
        // Check for collision before updating position
        if (!isCollision(newPosX, newPosY, character, obstacle1)) {
            posX = newPosX;
            posY = newPosY;
            updatePosition();
        }
        // Check for collision before updating position
        if (!isCollision(newPosX, newPosY, character, obstacle2)) {
            posX = newPosX;
            posY = newPosY;
            updatePosition();
        }
    });

    function updatePosition() {
        character.style.left = `${posX}px`;
        character.style.top = `${posY}px`;
    }

    function isCollision(x, y, elem1, elem2) {
        const rect1 = elem1.getBoundingClientRect();
        const rect2 = elem2.getBoundingClientRect();

        rect1.x = x;
        rect1.y = y;

        return !(rect1.right < rect2.left || 
                 rect1.left > rect2.right || 
                 rect1.bottom < rect2.top || 
                 rect1.top > rect2.bottom);
    }
});
