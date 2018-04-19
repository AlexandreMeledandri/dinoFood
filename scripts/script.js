var collapsed = false;
        function burger() {
            console.log(collapsed);
            if (collapsed) {
                document.getElementById("BurgerMenu").style.display = "none";
            } else {

                document.getElementById("BurgerMenu").style.display = "block";
            }
            collapsed = !collapsed;
        }