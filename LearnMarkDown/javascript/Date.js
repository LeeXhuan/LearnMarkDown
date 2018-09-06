/**
 * Created by xiahuan on 2018/8/28.
 */
//Date ����ʹ����UTC��Coordinated Universal Time�� ����Э��ʱ�䣩1970��1��1����ҹ����ʱ����ʼ�����ĺ��������������ڡ�
var now = new Date();
//UTC��׼��ʽ ��ǰ����nodejs�ڲ�����node.exe Date.js
console.log(now);//2018-09-06T08:50:40.532Z
//�ض��ĸ�ʽ��ʾ ���ڼ����¡��ա���
console.log(now.toDateString());//Thu Sep 06 2018
//�ض��ĸ�ʽ��ʾ ����ʱ���֡����ʱ��
console.log(now.toTimeString());//16:44:26 GMT+0800 (�й���׼ʱ��)
//�ض�������ʱ���ʽ��ʾ ���ڼ����¡��ա���
console.log(now.toLocaleDateString());//2018-9-6
//�ض��ĸ�ʽ��ʾ ����ʱ���֡���
console.log(now.toLocaleTimeString());//16:44:26
//�ض��ĸ�ʽ������UTC����
console.log(now.toUTCString());//Thu, 06 Sep 2018 08:50:02 GMT
//��ȡ���ڵĺ�����
console.log(now.getTime());//1536224477485 13λʱ���
//�Ժ����� ��������
now.setTime(1536224477485);
console.log(now.toLocaleDateString() + ' ' + now.toLocaleTimeString());//2018-9-6 17:01:17
//��ȡ4λ�������
console.log(now.getFullYear());//2018
