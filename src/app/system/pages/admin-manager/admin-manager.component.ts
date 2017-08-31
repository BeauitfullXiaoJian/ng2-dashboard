import { Component, OnInit,ViewChild } from '@angular/core';
import { SystemService } from './../../system.service';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.scss']
})
export class AdminManagerComponent implements OnInit {

  //页面配置信息
  pageConfig: any

  //账号列表
  admins: Array<any>

  //关键字段
  key: string

  constructor(private systemService: SystemService) {
    this.pageConfig = systemService.adminPageConfig
    this.key = systemService.adminPageConfig.table.filter(e => e.primary == true)[0].key || systemService.adminPageConfig.table[0].key
    this.admins = [
      { id: 1, account: 'xiaojian', description: 'none', avatar: "http://cool1024.com/flat-ui/img/box-image/message.jpg" },
      { id: 1, account: 'xiaojian', description: 'none',avatar:"http://hello1024.oss-cn-beijing.aliyuncs.com/body.jpg" }
    ]
  }

  ngOnInit() { }

}