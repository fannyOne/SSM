/*
 Validform datatype extension
 By sean during December 8, 2012 - February 20, 2013
 For more information, please visit http://validform.rjboy.cn

 ��չ�������ͣ�
 date��ƥ������
 zh��ƥ�������ַ�
 dword��ƥ��˫�ֽ��ַ�
 money��ƥ���������
 ipv4��ƥ��ipv4��ַ
 ipv6��ƥ��ipv6��ַ
 num��ƥ����ֵ��
 qq��ƥ��qq����
 unequal����ǰֵ���ܵ��ڱ�����ֵ�������������������벻���������һ��
 notvalued����ǰֵ���ܰ���ָ��ֵ�������벻�ܰ����û����ȵļ��
 min����ѡ������ѡ�������
 max����ѡ����಻�ܳ���������
 byterange:�ж��ַ����ȣ������������ַ�
 numrange���ж���ֵ��Χ����С��100����10֮�����
 daterange���ж����ڷ�Χ
 idcard�������֤��������ϸ���֤
 */

(function(){
    if($.Datatype){
        $.extend($.Tipmsg.w,
            {				
            "date":"����д���ڣ�",
            "zh":"����д���ģ�",
            "dword":"����д˫�ֽ��ַ���",
            "money":"����д����ֵ��",
            "ipv4":"����дip��ַ��",
            "ipv6":"����дIPv6��ַ��",
            "num":"����д��ֵ��",
            "qq":"����дQQ���룡",
            "unequal":"ֵ������ȣ�",
            "notvalued":"���ܺ����ض�ֵ��",
            "idcard":"���֤���벻�ԣ�",
            "my_order":"�����붩����",
            "my_phone":"�������ֻ���",
			"order_number":"�����붩����"
        }
        );

        $.extend($.Datatype,{
			//����
			"pwd": /^[0-9a-zA-Z]{6,}$/,
            /*
             reference http://blog.csdn.net/lxcnn/article/details/4362500;

             ���ڸ�ʽ�����ǣ�20120102 / 2012.01.02 / 2012/01/02 / 2012-01-02
             ʱ���ʽ�����ǣ�10:01:10 / 02:10
             �� 2012-01-02 02:10
             2012-01-02
             */
            "date":/^(?:(?:1[6-9]|[2-9][0-9])[0-9]{2}([-/.]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:(?:1[6-9]|[2-9][0-9])(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)([-/.]?)0?2\2(?:29))(\s+([01][0-9]:|2[0-3]:)?[0-5][0-9]:[0-5][0-9])?$/,

            //ƥ�������ַ�;
            "zh":/^[\u4e00-\u9fa5]+$/,

            //ƥ��˫�ֽ��ַ�;
            "dword":/^[^\x00-\xff]+$/,

            //��������;
            "money":/^([\u0024\u00A2\u00A3\u00A4\u20AC\u00A5\u20B1\20B9\uFFE5]\s*)(\d+,?)+\.?\d*\s*$/,

            //ƥ��ipv4��ַ;
            "ipv4":/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/,

            /*
             ƥ��ipv6��ַ;
             reference http://forums.intermapper.com/viewtopic.php?t=452;
             */
            "ipv6":/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,


            //��ֵ��;
            "num":/^(\d+[\s,]*)+\.?\d*$/,


            //QQ����;
            "qq":/^[1-9][0-9]{4,}$/,

            //������  ��ʽ��jd201510161026
            "my_order":/^[a-zA-Z]{2}[0-9]{12,}$/,

            "my_phone":/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[7|8])\d{8}$/,
			
			"order_number":/^[2-9][0-9]{14}$/,  //�Զ��� ���� 15λ����
			
            /*
             ����gets�ǻ�ȡ���ı�Ԫ��ֵ��
             objΪ��ǰ��Ԫ�أ�
             curformΪ��ǰ��֤�ı���
             datatypeΪ���õ�һЩ������ʽ�����á�
             */
            "unequal":function(gets,obj,curform,datatype){
                /*
                 ��ǰֵ������ָ����Ԫ�ص�ֵһ�����������벻���������һ�������벻������Ϊ�û�����
                 ע����Ҫͨ����with������ָ��Ҫ�Ƚϵı�Ԫ�أ�������clas��id������name����ֵ

                 eg.  <input type="text" name="name" id="name" class="name" />
                 eg1. <input type="text" name="test" datatype="unequal" with="name" />
                 eg2. <input type="text" name="test" datatype="unequal" with=".name" />
                 eg3. <input type="text" name="test" datatype="unequal" with="#name" />

                 Ҳ����������֤������withָ����ֵ���
                 ���������class��id��name�����Ҳ�������ʱ����ֱ�Ӹ�with��ֵ�Ƚ�
                 eg4. <input type="text" name="test" datatype="num unequal" with="100" />
                 ���ı����ֵ���ܵ���100
                 */
                var withele=$.trim(obj.attr("with"));
                var val=curform.find(withele+",[name='"+withele+"']").val() || withele;

                if(gets==$.trim(val)){
                    return false;
                }
            },


            "notvalued":function(gets,obj,curform,datatype){
                /*
                 ��ǰ�ı����ֵ���ܺ���ָ���ı����ֵ����ע��ʱ���õ������ﲻ�ܰ����û���
                 ע����Ҫ����Ԫ�ذ�with������ָ��Ҫ�Ƚϵı�Ԫ�أ�������clas��id������name����ֵ
                 <input type="text" name="username" id="name" class="name" />
                 eg. <input type="password" name="test" datatype="notvalued" with=".name" />

                 Ҳ����������֤���ܰ���withָ����ֵ
                 ���������class��id��name�����Ҳ�������ʱ����ֱ�Ӹ�with��ֵ�Ƚ�
                 eg2. <input type="password" name="test" datatype="notvalued" with="validform" />
                 Ҫ���ܺ���"validform"�ַ�
                 */
                var withele=$.trim(obj.attr("with"));
                var val=curform.find(withele+",[name='"+withele+"']").val() || withele;

                if(gets.indexOf($.trim(val))!=-1){
                    return false;
                }
            },


            "min":function(gets,obj,curform,datatype){
                /*
                 checkbox����ѡ��n��
                 ע����Ҫ����Ԫ�ذ�min������ָ����������Ҫѡ���û�а󶨵Ļ�ʹ��Ĭ��ֵ
                 eg. <input type="checkbox" name="test" datatype="min" min="3" />
                 */

                var minim=~~obj.attr("min") || 2,
                    numselected=curform.find("input[name='"+obj.attr("name")+"']:checked").length;
                return  numselected >= minim ? true : "������ѡ��"+minim+"�";
            },


            "max":function(gets,obj,curform,datatype){
                /*
                 checkbox���ѡ��n��
                 ע����Ҫ����Ԫ�ذ�max������ָ���������Ҫѡ���û�а󶨵Ļ�ʹ��Ĭ��ֵ
                 eg. <input type="checkbox" name="test" datatype="max" max="3" />
                 */

                var atmax=~~obj.attr("max") || 2,
                    numselected=curform.find("input[name='"+obj.attr("name")+"']:checked").length;

                if(numselected==0){
                    return false;
                }else if(numselected>atmax){
                    return "���ֻ��ѡ��"+atmax+"�";
                }
                return  true;
            },


            "byterange":function(gets,obj,curform,datatype){
                /*
                 �ж��ַ����ȣ������������ַ�
                 ע����Ҫ����Ԫ�ذ�max,min������ָ��������С������ַ����ȣ�û�а󶨵Ļ�ʹ��Ĭ��ֵ
                 */
                var dregx=/[^\x00-\xff]/g;
                var maxim=~~obj.attr("max") || 100000000,
                    minim=~~obj.attr("min") || 0;

                getslen=gets.replace(dregx,"00").length;

                if(getslen>maxim){
                    return "�����ַ����ܶ���"+maxim+"���������������ַ���";
                }

                if(getslen<minim){
                    return "�����ַ���������"+minim+"���������������ַ���";
                }

                return true;
            },


            "numrange":function(gets,obj,curform,datatype){
                /*
                 �ж���ֵ��Χ
                 ע����Ҫ����Ԫ�ذ�max,min������ָ��������С�������ֵ��û�а󶨵Ļ�ʹ��Ĭ��ֵ
                 */

                var maxim=~~obj.attr("max") || 100000000,
                    minim=~~obj.attr("min") || 0;

                gets=gets.replace(/\s*/g,"").replace(/,/g,"");
                if(!/^\d+\.?\d*$/.test(gets)){
                    return "ֻ���������֣�";
                }

                if(gets<minim){
                    return "ֵ����С��"+minim+"��";
                }else if(gets>maxim){
                    return "ֵ���ܴ���"+maxim+"��";
                }
                return  true;
            },


            "daterange":function(gets,obj,curform,datatype){
                /*
                 �ж����ڷ�Χ
                 ע����Ҫ����Ԫ�ذ�max��min���ԣ�������ͬʱ����ָ��������С�����������
                 ���ڸ�ʽ��2012/12/29 �� 2012-12-29 �� 2012.12.29 �� 2012,12,29
                 */
                var maxim=new Date(obj.attr("max").replace(/[-\.,]/g,"/")),
                    minim=new Date(obj.attr("min").replace(/[-\.,]/g,"/")),
                    gets=new Date(gets.replace(/[-\.,]/g,"/"));

                if(!gets.getDate()){
                    return "���ڸ�ʽ���ԣ�";
                }

                if(gets>maxim){
                    return "���ڲ��ܴ���"+obj.attr("max");
                }

                if(gets<minim){
                    return "���ڲ���С��"+obj.attr("min");
                }

                return true;
            },


            "idcard":function(gets,obj,curform,datatype){
                /*
                 �÷����������ṩ;
                 �����֤�����ϸ���֤;
                 */

                var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];// ��Ȩ����;
                var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];// ���֤��֤λֵ��10����X;

                if (gets.length == 15) {
                    return isValidityBrithBy15IdCard(gets);
                }else if (gets.length == 18){
                    var a_idCard = gets.split("");// �õ����֤����
                    if (isValidityBrithBy18IdCard(gets)&&isTrueValidateCodeBy18IdCard(a_idCard)) {
                        return true;
                    }
                    return false;
                }
                return false;

                function isTrueValidateCodeBy18IdCard(a_idCard) {
                    var sum = 0; // ������Ȩ��ͱ���
                    if (a_idCard[17].toLowerCase() == 'x') {
                        a_idCard[17] = 10;// �����λΪx����֤���滻Ϊ10�����������
                    }
                    for ( var i = 0; i < 17; i++) {
                        sum += Wi[i] * a_idCard[i];// ��Ȩ���
                    }
                    valCodePosition = sum % 11;// �õ���֤����λ��
                    if (a_idCard[17] == ValideCode[valCodePosition]) {
                        return true;
                    }
                    return false;
                }

                function isValidityBrithBy18IdCard(idCard18){
                    var year = idCard18.substring(6,10);
                    var month = idCard18.substring(10,12);
                    var day = idCard18.substring(12,14);
                    var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
                    // ������getFullYear()��ȡ��ݣ�����ǧ�������
                    if(temp_date.getFullYear()!=parseFloat(year) || temp_date.getMonth()!=parseFloat(month)-1 || temp_date.getDate()!=parseFloat(day)){
                        return false;
                    }
                    return true;
                }

                function isValidityBrithBy15IdCard(idCard15){
                    var year =  idCard15.substring(6,8);
                    var month = idCard15.substring(8,10);
                    var day = idCard15.substring(10,12);
                    var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
                    // ���������֤�е����������迼��ǧ��������ʹ��getYear()����
                    if(temp_date.getYear()!=parseFloat(year) || temp_date.getMonth()!=parseFloat(month)-1 || temp_date.getDate()!=parseFloat(day)){
                        return false;
                    }
                    return true;
                }

            }
        });
    }else{
        setTimeout(arguments.callee,10);
    }
})();