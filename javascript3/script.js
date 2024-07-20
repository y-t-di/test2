//問1
    function menseki(hankei){
        return "半径" + hankei + "㎝の円の面積は" + hankei*hankei*3.14 + "㎠です。<br>";
    }

    document.write(menseki(5));
    document.write(menseki(7));
    document.write(menseki(10));

document.write("<br><br>");

//問2
    function goukei(group, otona,kodomo){
        return group + "グループの合計金額は" + (otona*500 + kodomo*200) + "円です。<br>";
    }

    document.write(goukei("A", 2,4));
    document.write(goukei("B", 1,5));
    document.write(goukei("C", 3,7));