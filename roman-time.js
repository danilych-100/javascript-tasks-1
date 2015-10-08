        var hours = process.argv[2];
        var minutes = process.argv[3];

        hours = parseInt(hours, 10);
        minutes = parseInt(minutes, 10);

       	if ((hours < 0 || hours > 23) || (minutes < 0 || minutes > 59)) {         
        	console.log('Время указано не верно');
            }
            else {
            	console.log(ConvertToRomans(hours) +':'+ ConvertToRomans(minutes));
            }
function ConvertToRomans(time)
        {
            var countOfTens = '';
            var number = time;
            var romansNumbers = ['','I','II','III','IV','V','VI','VII','VIII','IX','X','L']   
            if (time == 0)
            {
                romansNumbers[0] = "nn";
            }         
            for (i = 1; i <= (time / 10); i++)
            {
                countOfTens += romansNumbers[10];
            }          
            if ((time % 10 == 9)&&(time<30)&&(time > 10))
            {
                return number = countOfTens + romansNumbers[9];
            }
            if (time / 10==4)
            {
                return number = romansNumbers[10] + romansNumbers[11] + romansNumbers[time % 10];
            }
            if (time / 10 == 5)
            {
                return number= romansNumbers[11] + romansNumbers[time % 10];
            }
            return number = countOfTens + romansNumbers[time % 10];
        }       
