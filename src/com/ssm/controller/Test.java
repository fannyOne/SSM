package com.ssm.controller;

public class Test {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String cp="110.0571136515,30.1311755144 110.0607900024,30.1262499773 110.0595633992,30.1258097104 110.0554730265,30.1248579688 110.0512457316,30.1219054949";
		int index=0;
		int index1=0;
		for(int i=0;i<cp.length();i++){
			index1=cp.indexOf(" ",index);
			if(index1<0){
				String cot=cp.substring(i,cp.length());
				System.out.println(cot);
				break;
			}else{
				String cot=cp.substring(i,index1);
				System.out.println(cot);
				i=index1;
				index=index1+1;
			}
		}
	}

}
