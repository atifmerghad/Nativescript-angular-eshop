import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";
import { TextField } from "tns-core-modules";
import { device, screen, isAndroid, isIOS } from "tns-core-modules/platform";
import { Utils } from '../../../../core/helpers/utils';
import { getString, setString } from '@nativescript/core/application-settings';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-otp",
    templateUrl: "./otp.component.html",
    styleUrls: ['./otp.component.scss'],
    providers: [Utils]

})
export class OtpComponent implements OnInit {

    @ViewChild("myInput", { static: false }) myInput: ElementRef;

    isRtl;
    showSendOtpSender
    counter = { minutes: 0, seconds: 0 };
    redirectTo;
    mobile;
    constructor(
        private utils: Utils,
        private routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
        setTimeout(() => this.myInput.nativeElement.focus(), isAndroid ? 0 : 800);
        this.timerDown(120);
        this.sendOTP();
        this.activatedRoute.params.subscribe((routeData: any) => {
            this.redirectTo = routeData.redirectTo;
            this.mobile = "+212" + routeData.mobile.substr(0, 2) + "*****" + routeData.mobile.substr(-2);
        })

    }


    onLoaded(args) {
        //var field: TextField = <TextField>args.object;
        //field.ios.textContentType = UITextContentTypeOneTimeCode;
        args.object.nativeView.textContentType = UITextContentTypeOneTimeCode;
    }

    onTextChange(args) {
        const label = args.object.page.getViewById(`textField`);
        const numArray = args.object.text.split('');
        for (let i = 0; i < 4; i++) {
            const label = args.object.page.getViewById(`label${i}`);
            label.text = numArray[i] || ' ';
        }
        if (label.text.length == 4) {
            this.verifyOTP(label.text);
        }
    }

    onFocusField(args) {
        args.object.page.getViewById('textField').focus();
    }


    sendOTP() {

    }

    resendOTP() {
        this.showSendOtpSender = false;
        this.timerDown(120);

    }

    verifyOTP(otp) {
        //  const redirectUrl = getString('redirectUrl');
        setTimeout(() => {
            if (otp == 1111) {
                this.routerExtensions.navigate([this.redirectTo, { payload: JSON.stringify({ redirectTo: '/dashboard' }) }], { clearHistory: true });
            }
            else {
                this.utils.errorsNotification('auth.otp_wrong')
            }
        }, 2000)

    }

    timerDown(timeVal) {
        var _timeVal = timeVal;
        var seconds = 0;
        var minutes = 0;

        var timer = setInterval(() => {
            var _minutes = Math.floor(_timeVal / 60);
            var rs = _timeVal - (_minutes * 60);
            minutes = _minutes;
            seconds = rs;
            _timeVal--;
            if (minutes >= 1) {
                if (rs <= 0) {
                    seconds = 60;
                    _minutes--;
                    minutes = _minutes--;
                }
            }
            else if (minutes <= 0) {
                minutes = 0;

                if (seconds <= 0) {
                    seconds = 0;
                    clearInterval(timer);
                }
            }

            this.counter = {
                minutes: minutes,
                seconds: seconds
            };
            if (this.counter.minutes == 0 && this.counter.seconds == 0) this.showSendOtpSender = true;


        }, 1000);

        // this.otp = "";

    }
}
