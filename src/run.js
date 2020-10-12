function creatTree(){
   		var s=document.getElementById("data1").value;//读取文本信息
		var array=s.split("\n");//一行一数组
		if(array[0].slice(0,2)!=="导师")
		{
		alert("请输入以导师为开头的数据！");
		}
		else
		{
		var blankline=false;//检查空行用
		var treeData=[];//树数据
		var num=0;
		var stu=0;
		for(var i=0; i<array.length; i++)//开始建树
		{
		if(i==0)//第一级树是导师
		{
		var sta={};
		num++;
		sta.title=array[i].split("：")[0]+"_"+array[i].split("：")[1];
		sta.pid=0;
		sta.id=num;
		stu=num;
		treeData.push(sta);
		}
		else
		{
		if(array[i].length<1)//是空行的话
		{
		blankline=true;
		}
		else
		{
		if(blankline)
		{
		if(array[i].split("：")[0]=="导师")//是学生吗
		{
		var sta={};
        num++;
	sta.title=array[i].split("：")[0]+"_"+array[i].split("：")[1];
	sta.pid=0;
	sta.id=num;
	stu=num;
		treeData.push(sta);
		}
		else//不是就是技能树or公司
		{
		for(var j=0; j<treeData.length; j++)
		{
		if(array[i].split("：")[0]==treeData[j].title)
		{
		var sta={};
		num++;
		sta.title=array[i].split("：")[1];
		sta.pid=treeData[j].id;
		sta.id=num;
		treeData.push(sta);
		}
		}
		}
		}
		else
		{
		var sta={};
		num++;
		sta.title=array[i].split("：")[0];
		sta.pid=stu;
		sta.id=num;
		treeData.push(sta);
		var arr=array[i].split("：")[1].split("、");
		var p=num;
		for(var k=0; k<arr.length; k++)
		{
		var sta={};
		num++;
		sta.id=num;
		sta.title=arr[k];
		sta.pid=p;
		treeData.push(sta);
		}
		}
		blankline=false;//初始化空行设定
		}
		}
		}
		document.getElementsByClassName("f-tree").item(0).innerHTML="";//重新提交需要初始化树
		config.tree({type:0,wrapper:'.f-tree',data:treeData});//生成树
		}
		console.log(treeData)//F12看看后台
		}
