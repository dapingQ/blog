var c = 2.99792458e8;
var e = 1.6021892e-19;
var h = 6.626176e-34;

var TWMFlag = new Array(-1, -1); //两个元素分别记录最近点击嘅两个文本框。
var etalonFlag1 = -1;
var etalonFlag2 = -1;


function energyCal(i) {
    var inputs = document.getElementsByName("energy");
    var nm; //无论输入单位系咩，都转换到nm先。
    var input = parseFloat(inputs[i].value); //强制转换为数值
    var num = 9; //有效数字嘅位数
    if (input != NaN) {
        for (var j = 0; j < inputs.length; j++)
            inputs[j].style.color = "black";
        inputs[i].style.color = "#e45836"; //基准输入显示蓝色。
        switch (i) {
            case 0:
                nm = input;
                break;
            case 1:
                nm = input * 1000.0;
                break;
            case 2:
                nm = 1.0e9 / (input * e / h / c);
                break;
            case 3:
                nm = 1.0e7 / input;
                break;
            case 4:
                nm = c / (input * 1e12) * 1e9;
                break;
            case 5:
                nm = c / (input * 1e9) * 1e9;
                break;
        }
        if (i != 0) inputs[0].value = parseFloat(nm).toPrecision(5); //因为文本框嘅长度唔够，保留5只有效数字。
        if (i != 1) inputs[1].value = parseFloat(nm / 1000.0).toPrecision(num);
        if (i != 2) inputs[2].value = parseFloat((1e9 / nm) * c * h / e).toPrecision(num);
        if (i != 3) inputs[3].value = parseFloat(1.0e7 / nm).toPrecision(num);
        if (i != 4) inputs[4].value = parseFloat(c / 1e12 / (nm * 1e-9)).toPrecision(num);
        if (i != 5) inputs[5].value = parseFloat(c / 1e9 / (nm * 1e-9)).toPrecision(num);
    }
}

function bandwidthCalc1() {
    var inputs = document.getElementsByClassName("band");
    var wavenumber = parseFloat(inputs[0].value);
    var bandwidth = parseFloat(inputs[1].value);
    for (var j = 0; j < inputs.length; j++)
        inputs[j].style.color = "black";
    inputs[0].style.color = "#e45836"; //基准输入显示蓝色。
    inputs[1].style.color = "#e45836"; //基准输入显示蓝色。
    inputs[2].value = wavenumber / 0.03335640951981521;
    inputs[3].value = bandwidth / 0.03335640951981521 * 1000;
    inputs[4].value = 1.0e7 / wavenumber;
    inputs[5].value = bandwidth / wavenumber * inputs[4].value;
    inputs[6].value = wavenumber * 0.000123985207;
    inputs[7].value = bandwidth / wavenumber * inputs[6].value * 1000;
    for (var j = 0; j < inputs.length; j++)
        if (j != 0 && j != 1) inputs[j].value = parseFloat(inputs[j].value).toPrecision(7);
        //有效数字转换
}

function bandwidthCalc2() {
    var inputs = document.getElementsByClassName("band");
    var freq = parseFloat(inputs[2].value);
    var bandwidth = parseFloat(inputs[3].value);
    for (var j = 0; j < inputs.length; j++)
        inputs[j].style.color = "black";
    inputs[2].style.color = "#e45836";
    inputs[3].style.color = "#e45836";
    inputs[0].value = freq * 0.03335640951981521;
    inputs[1].value = bandwidth * 0.03335640951981521 / 1000;
    inputs[4].value = 1.0e7 / inputs[0].value;
    inputs[5].value = bandwidth / 1000 / freq * inputs[4].value;
    inputs[6].value = parseFloat(inputs[0].value) * 0.000123985207;
    inputs[7].value = bandwidth / freq * inputs[6].value;
    for (var j = 0; j < inputs.length; j++)
        if (j != 2 && j != 3) inputs[j].value = parseFloat(inputs[j].value).toPrecision(7);
        //有效数字转换
}

function bandwidthCalc3() {
    var inputs = document.getElementsByClassName("band");
    var wavelength = parseFloat(inputs[4].value);
    var bandwidth = parseFloat(inputs[5].value);
    for (var j = 0; j < inputs.length; j++)
        inputs[j].style.color = "black";
    inputs[4].style.color = "#e45836";
    inputs[5].style.color = "#e45836";
    inputs[0].value = 1e7 / wavelength;
    inputs[1].value = inputs[0].value * bandwidth / wavelength;
    inputs[2].value = inputs[0].value / 0.03335640951981521;
    inputs[3].value = inputs[1].value / 0.03335640951981521 * 1000;
    inputs[6].value = parseFloat(inputs[0].value) * 0.000123985207;
    inputs[7].value = bandwidth / wavelength * inputs[6].value * 1000;
    for (var j = 0; j < inputs.length; j++)
        if (j != 4 && j != 5) inputs[j].value = parseFloat(inputs[j].value).toPrecision(7);
        //有效数字转换
}

function bandwidthCalc4() {
    var inputs = document.getElementsByClassName("band");
    var energy = parseFloat(inputs[6].value);
    var deltaEnergy = parseFloat(inputs[7].value) / 1000;
    for (var j = 0; j < inputs.length; j++)
        inputs[j].style.color = "black";
    inputs[6].style.color = "#e45836";
    inputs[7].style.color = "#e45836";
    inputs[0].value = energy * 8065.47835;
    inputs[1].value = inputs[0].value * deltaEnergy / energy;
    inputs[2].value = energy * 241796.958;
    inputs[3].value = inputs[2].value * deltaEnergy / energy * 1000;
    inputs[4].value = 1239.9 / energy;
    inputs[5].value = inputs[4].value * deltaEnergy / energy;
    for (var j = 0; j < inputs.length; j++)
        if (j != 6 && j != 7) inputs[j].value = parseFloat(inputs[j].value).toPrecision(7);
        //有效数字转换
}

function pressureCalc(i) {
    var inputs = document.getElementsByClassName("pressure");
    var input = parseFloat(inputs[i].value);
    for (var j = 0; j < inputs.length; j++)
        inputs[j].style.color = "black";
    inputs[i].style.color = "#e45836";
    switch (i) {
        case 0:
            inputs[1].value = input * 133.322;
            break;
        case 1:
            break;
        case 2:
            inputs[1].value = input * 1e5;
            break;
        case 3:
            inputs[1].value = input * 6894.757;
            break;
        case 4:
            inputs[1].value = input * 101325;
            break;
        case 5:
            inputs[1].value = input * 249.088908333;
            break;
    }
    if (i != 0) inputs[0].value = inputs[1].value / 133.332;
    if (i != 2) inputs[2].value = inputs[1].value / 1e5;
    if (i != 3) inputs[3].value = inputs[1].value / 6894.757;
    if (i != 4) inputs[4].value = inputs[1].value / 101325;
    if (i != 5) inputs[5].value = inputs[1].value / 249.088908333;
    for (var j = 0; j < inputs.length; j++)
        if (j != i) inputs[j].value = parseFloat(inputs[j].value).toPrecision(7);
}

function TWMCalc(i) {
    var j;
    var inputData = document.getElementsByClassName("TWM");
    var inputUnit = document.getElementsByClassName("TWMUnit");
    if (i != TWMFlag[0]) //假如本次点击嘅对象唔同，改变旗标（计算基准）。
    {
        TWMFlag[1] = TWMFlag[0];
        TWMFlag[0] = i;
    }
    for (j = 0; j < inputData.length; j++) {
        inputData[j].style.color = "black";
        inputUnit[j].style.color = "black";
    }
    //从Flag中揾到两个基准，改变颜色。保存基准数据。
    var w = new Array(4);
    for (j in TWMFlag) {
        if (TWMFlag[j] != -1) {
            inputData[TWMFlag[j]].style.color = "#e45836";
            inputUnit[TWMFlag[j]].style.color = "#e45836";
            w[TWMFlag[j]] = parseFloat(inputData[TWMFlag[j]].value);
        }
    }
    //以波数储存

    for (j = 0; j < 4; j++) {
        switch (inputUnit[j].selectedIndex) {
            case 0:
                w[j] = 1.0e7 / w[j];
                break;
            case 1:
                w[j] = w[j] * 1e7 / c;
                break;
            case 2:
                w[j] = w[j] * 1e4 / c;
                break;
            case 3:
                break;
        }
    }
    //求解
    if (TWMFlag[0] != -1 && TWMFlag[1] != -1) {
        var flagSort = new Array();
        for (j in TWMFlag) flagSort[j] = TWMFlag[j];
        if (flagSort[0] > flagSort[1]) //对Flag从小到大排。
        {
            var temp = flagSort[0];
            flagSort[0] = flagSort[1];
            flagSort[1] = temp;
        }
        //下面每一种情况单独列出，共有6个函数。
        if (flagSort[0] == 0 && flagSort[1] == 1) {
            var resultIndex = new Array(2, 3);
            w[2] = w[0] + w[1];
            w[3] = w[2] + w[0];
        }
        if (flagSort[0] == 0 && flagSort[1] == 2) {
            var resultIndex = new Array(1, 3);
            w[1] = w[2] - w[0];
            w[3] = w[2] + w[0];
        }
        if (flagSort[0] == 0 && flagSort[1] == 3) {
            var resultIndex = new Array(1, 2);
            w[2] = w[3] - w[0];
            w[1] = w[2] - w[0];
        }
        if (flagSort[0] == 1 && flagSort[1] == 2) {
            var resultIndex = new Array(0, 3);
            w[0] = w[2] - w[1];
            w[3] = w[2] + w[0];
        }
        if (flagSort[0] == 1 && flagSort[1] == 3) {
            var resultIndex = new Array(0, 2);
            w[0] = (w[3] - w[1]) / 2.0;
            w[2] = w[1] + w[0];
        }
        if (flagSort[0] == 2 && flagSort[1] == 3) {
            var resultIndex = new Array(0, 1);
            w[0] = w[3] - w[2];
            w[1] = w[2] - w[0];
        }
        //验证答案嘅合理性
        if (!(w[3] > w[2] && w[2] > w[1] && w[2] > w[0] && w[0] > 0 && w[1] > 0)) {
            for (j in resultIndex)
                w[resultIndex[j]] = NaN;
        }
        //显示每个答案
        for (j in resultIndex) {
            var index = resultIndex[j];
            var result; //转换单位嘅结果。
            switch (inputUnit[index].selectedIndex) {
                case 0:
                    result = 1.0e7 / w[index];
                    break;
                case 1:
                    result = w[index] * c / 1e7;
                    break;
                case 2:
                    result = w[index] * c / 1e4;
                    break;
                case 3:
                    result = w[index];
                    break;
            }
            inputData[index].value = result.toPrecision(8);
        }
    }
}


function TWMCalc2(i) {
    //总体策略：在输入部分改变单位，重新计算；在结果部分，转换结果单位。
    if (i == TWMFlag[0] || i == TWMFlag[1])
        TWMCalc(i);
    else if (TWMFlag[0] != -1)
        TWMCalc(TWMFlag[0]);
}

function FSRCalc(i) {
    var inputs = document.getElementsByClassName("etalon");
    var unit = document.getElementsByClassName("etalonUnit");
    if (i == -1 && etalonFlag1 != -1) //etalonFlag记录咗上一次计算嘅基准。
    {
        FSRCalc(etalonFlag1);
    } else if (i != -1) {
        inputs[2].style.color = "black";
        inputs[3].style.color = "black";
        inputs[i].style.color = "#e45836";
        etalonFlag1 = i;
        var lambda = parseFloat(inputs[0].value);
        var n = parseFloat(inputs[1].value);
        var wavenumber = 1.0e7 / lambda;
        var height = parseFloat(inputs[2].value);
        var FSR = parseFloat(inputs[3].value);
        var unitIndex = unit[0].selectedIndex;
        if (i == 2) {
            FSR = 5 / height / n;
            switch (unitIndex) {
                case 0:
                    break;
                case 1:
                    FSR = FSR * 29.9792458;
                    break;
                case 2:
                    FSR = FSR * lambda / wavenumber;
            }
            inputs[3].value = FSR.toPrecision(5);
        } else if (i == 3) {
            switch (unitIndex) {
                case 0:
                    break;
                case 1:
                    FSR = FSR / 29.9792458;
                    break;
                case 2:
                    FSR = FSR * wavenumber / lambda;
            }
            height = 5 / FSR / n;
            inputs[2].value = height.toPrecision(5);
        }
        resolutionCalc();
    }
}



function finessCalc(i) {
    var inputs = document.getElementsByClassName("etalon");
    var unit = document.getElementsByClassName("etalonUnit");
    if (i == -1 && etalonFlag2 != -1) //etalonFlag记录咗上一次计算嘅基准。
    {
        finessCalc(etalonFlag2);
    } else if (i != -1) {
        inputs[4].style.color = "black";
        inputs[5].style.color = "black";
        inputs[i].style.color = "#e45836";
        etalonFlag2 = i;
        r = parseFloat(inputs[4].value) / 100;
        s = parseFloat(inputs[5].value);
        if (i == 4) {
            inputs[5].value = (Math.PI * Math.sqrt(r) / (1 - r)).toPrecision(5);
        } else if (i == 5) {
            inputs[4].value = ((s * s - s * Math.PI) / (s * s - Math.PI * Math.PI)).toPrecision(5) * 100;
        }
        resolutionCalc();
    }
}

function resolutionCalc() {
    var inputs = document.getElementsByClassName("etalon");
    var unit = document.getElementsByClassName("etalonResolutionUnit");
    var resultObject = document.getElementById("resolution");
    var lambda = parseFloat(inputs[0].value);
    var n = parseFloat(inputs[1].value);
    var height = parseFloat(inputs[2].value);
    var wavenumber = 1.0e7 / lambda;
    var s = parseFloat(inputs[5].value);
    var unitIndex = unit[0].selectedIndex;
    var result = 1 / (2 / 20.7 * s * 2 * height * n)
    switch (unitIndex) {
        case 0:
            break;
        case 1:
            result = result * 29.9792458;
            break;
        case 2:
            result = lambda * result / wavenumber;
    }
    resultObject.innerHTML = result.toPrecision(3);
}

function resonatorCalc() {
    var inputs = document.getElementsByClassName("resonator");
    var r1 = parseFloat(inputs[0].value);
    var r2 = parseFloat(inputs[1].value);
    var l = parseFloat(inputs[2].value);
    var lambda = parseFloat(inputs[3].value) / 1e6;
    var g1 = 1 - l / r1;
    var g2 = 1 - l / r2;
    if (g1 * g2 > 0 && g1 * g2 < 1) {
        var coeff = Math.pow((lambda / Math.PI), 2);
        var waist = Math.pow((coeff * l * (r1 - l) * (r2 - l) * (r1 + r2 - l) / Math.pow((r1 + r2 - 2 * l), 2)), 1 / 4);
        var theta = lambda * Math.PI / waist;
        var w1 = Math.pow(coeff * l * l * g2 / g1 / (1 - g1 * g2), 1 / 4);
        var w2 = Math.pow(coeff * l * l * g1 / g2 / (1 - g1 * g2), 1 / 4);
        var z1 = l * (r2 - l) / (r1 + r2 - 2 * l);
        var b = 2 * Math.pow(waist, 2) / lambda * Math.PI;
        var deltaF = 10 / l / 2 //cm-1
        var stableObject = document.getElementById("stable?");
        stableObject.innerHTML = "此腔为稳定腔。"
        var waistObject = document.getElementById("waist");
        waistObject.innerHTML = waist.toPrecision(5) + "mm";
        var thetaObject = document.getElementById("theta");
        thetaObject.innerHTML = theta.toPrecision(5) + "Rad";
        var w1Object = document.getElementById("w1");
        w1Object.innerHTML = w1.toPrecision(5) + "mm";
        var w2Object = document.getElementById("w2");
        w2Object.innerHTML = w2.toPrecision(5) + "mm";
        var z1Object = document.getElementById("z1");
        z1Object.innerHTML = z1.toPrecision(5) + "mm";
        var bObject = document.getElementById("b");
        bObject.innerHTML = b.toPrecision(5) + "mm";
        var fObject = document.getElementById("deltaF");
        fObject.innerHTML = deltaF.toPrecision(5) + "cm<sup>-1<sub>";
    } else if (g1 * g2 == 1) {
        var stableObject = document.getElementById("stable?");
        stableObject.innerHTML = "此腔为介稳腔。"
        var results = document.getElementsByClassName("resonatorResult");
        for (var j in results)
            results[j].innerHTML = "";
    } else if (g1 * g2 == 0) {
        l = l + 0.000001;
        g1 = 1 - l / r1;
        g2 = 1 - l / r2
        var coeff = Math.pow((lambda / Math.PI), 2);
        var waist = Math.pow((coeff * l * (r1 - l) * (r2 - l) * (r1 + r2 - l) / Math.pow((r1 + r2 - 2 * l), 2)), 1 / 4);
        var theta = lambda * Math.PI / waist;
        var w1 = Math.pow(coeff * l * l * g2 / g1 / (1 - g1 * g2), 1 / 4);
        var w2 = Math.pow(coeff * l * l * g1 / g2 / (1 - g1 * g2), 1 / 4);
        var z1 = l * (r2 - l) / (r1 + r2 - 2 * l);
        var b = 2 * Math.pow(waist, 2) / lambda * Math.PI;
        var deltaF = 10 / l / 2 //cm-1
        var stableObject = document.getElementById("stable?");
        stableObject.innerHTML = "此腔为介稳腔。"
        var waistObject = document.getElementById("waist");
        waistObject.innerHTML = waist.toPrecision(5) + "mm";
        var thetaObject = document.getElementById("theta");
        thetaObject.innerHTML = theta.toPrecision(5) + "Rad";
        var w1Object = document.getElementById("w1");
        w1Object.innerHTML = w1.toPrecision(5) + "mm";
        var w2Object = document.getElementById("w2");
        w2Object.innerHTML = w2.toPrecision(5) + "mm";
        var z1Object = document.getElementById("z1");
        z1Object.innerHTML = z1.toPrecision(5) + "mm";
        var bObject = document.getElementById("b");
        bObject.innerHTML = b.toPrecision(5) + "mm";
        var fObject = document.getElementById("deltaF");
        fObject.innerHTML = deltaF.toPrecision(5) + "cm<sup>-1<sub>";
    } else {
        var stableObject = document.getElementById("stable?");
        stableObject.innerHTML = "此腔为非稳腔。"
        var results = document.getElementsByClassName("resonatorResult");
        for (var j in results)
            results[j].innerHTML = "";
    }

}</sub></sup></sub></sup>