<!DOCTYPE html>
<html>
<head>
    <title>Calculator</title>
    <style>
        .calculator {
            width: 300px;
            margin: 0 auto;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f5f5f5;
        }

        input[type="text"], input[type="button"] {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: 2px;
        }

        #result {
            width: 100%;
            height: 50px;
            font-size: 24px;
            text-align: right;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="result" readonly>
        <input type="button" value="1" onclick="addToResult('1')">
        <input type="button" value="2" onclick="addToResult('2')">
        <input type="button" value="3" onclick="addToResult('3')">
        <input type="button" value="+" onclick="addToResult('+')">
        <input type="button" value="4" onclick="addToResult('4')">
        <input type="button" value="5" onclick="addToResult('5')">
        <input type="button" value="6" onclick="addToResult('6')">
        <input type="button" value="-" onclick="addToResult('-')">
        <input type="button" value="7" onclick="addToResult('7')">
        <input type="button" value="8" onclick="addToResult('8')">
        <input type="button" value="9" onclick="addToResult('9')">
        <input type="button" value="*" onclick="addToResult('*')">
        <input type="button" value="C" onclick="clearResult()">
        <input type="button" value="0" onclick="addToResult('0')">
        <input type="button" value="=" onclick="calculate()">
        <input type="button" value="/" onclick="addToResult('/')">
    </div>

    <script>
        function addToResult(value) {
            document.getElementById('result').value += value;
        }

        function clearResult() {
            document.getElementById('result').value = '';
        }

        function calculate() {
            const result = document.getElementById('result').value;
            try {
                document.getElementById('result').value = eval(result);
            } catch (error) {
                document.getElementById('result').value = 'Error';
            }
        }
    </script>
</body>
</html>
