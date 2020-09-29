function check_parents_tree(node, predicate)
{
    const check_result = node !== document ? predicate(node) : false
    if(node.parentNode !== null)
    {
        return check_result || check_parents_tree(node.parentNode, predicate)
    }
    else
    {
        return check_result
    }
}

document.documentElement.addEventListener('click', function (event) {
    let elem = document.getElementsByClassName("side-menu")[0];
    const click_inside_nav = check_parents_tree(event.target, function (node) {
        return node.classList.contains("side-menu")
    })
    if (!click_inside_nav)
    {
        elem.style.animationName = 'slideout';
    }
}, true)

function slideIn()
{
    let elem = document.getElementById("slider");
    elem.style.animationName = "slidein";
}

