import styled from 'styled-components';
import NavigateHeader from "../../Components/Header/NavigateHeader";

export default function JoinRulePrivacy() {
    return(
        <div>
            <NavigateHeader headerTitlte={"개인정보 정책"}/>
            <Container>
                <JoinRule>Con 개인정보처리방침</JoinRule>
                <JoinRuleContent>
                    CON(이하 “회사”)는 개인정보보호 관한 법률을 준수하고 있으며, 이용자의 개인정보가 보호받을 수 있도록 최선을 다하고 있습니다. 이에 개인정보보호 제30조에 따라 개인정보 처리에 관한 절차 
                    <br/>및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립•공개합니다.
                    <br/>개인정보처리방침은 관련 법률 및 지침의 변경과 내부 운영방침의 변경에 따라 변경될 수 있습니다.
                </JoinRuleContent>

                {/* 표1 */}
                <GrayBox style={{width: "1180px"}}>주요 개인정보 처리 표시 (라벨링)</GrayBox>
                <BottomBoxContainer>
                    <BottomBoxes>
                        <Box1Bottom>
                            <InsideBoxContainer >
                                <img src='./imgs/account_circle.png' alt='일반 개인정보 수집'/>
                                <JoinRuleNumber>일반 개인정보 수집</JoinRuleNumber>
                                <JoinRuleContent style={{borderBottom: "none", marginTop: "10px"}}>
                                    이름, 휴대전화번호, 생년월일 등
                                    <br/>※세부항목은 개인정보 처리방침 본문 확인
                                </JoinRuleContent>
                            </InsideBoxContainer>
                        </Box1Bottom>
                        <Box1Bottom>
                            <InsideBoxContainer>
                                <img src='./imgs/location_home.png' alt='개인정보 처리목적'/>
                                <JoinRuleNumber>개인정보 처리목적</JoinRuleNumber>
                                <JoinRuleContent style={{borderBottom: "none", marginTop: "10px"}}>
                                    회원 관리, 서비스 제공, 마케팅 활용 등
                                </JoinRuleContent>
                            </InsideBoxContainer>
                        </Box1Bottom>
                        <Box1Bottom>
                            <InsideBoxContainer>
                                <img src='./imgs/breastfeeding.png' alt='법정대리인 권리와 의무'/>
                                <JoinRuleNumber>법정대리인 권리와 의무</JoinRuleNumber>
                                <JoinRuleContent style={{borderBottom: "none", marginTop: "10px"}}>
                                    만 14세 미만 아동 가입 시 법정대리인 동의 등
                                </JoinRuleContent>
                            </InsideBoxContainer>
                        </Box1Bottom>
                    </BottomBoxes>
                </BottomBoxContainer>

                <JoinRuleNumber>개인정보처리방침은 다음과 같은 내용을 담고 있습니다.</JoinRuleNumber>
                
                {/* 표2 */}
                <GrayBox style={{width: "1180px"}}>목차</GrayBox>
                <BottomBoxContainer>
                    <Box2Bottom>
                            1. 개인정보 수집 및 이용 목적
                            <br/>2. 수집하는 개인정보의 항목 및 수집 방법
                            <br/>3. 만 14세 미만 아동의 개인정보 처리에 관한 사항
                            <br/>4. 개인정보의 보유이용기간 및 파기
                            <br/>5. 개인정보의 제3자 제공 및 위탁 내용
                            <br/>6. 이용자 및 법정대리인의 권리와 그 행사방법
                    </Box2Bottom>
                </BottomBoxContainer>

                <JoinRuleNumber>1. 개인정보 수집 및 이용 목적</JoinRuleNumber>
                <JoinRuleContent>
                    회사는 이용자의 개인정보를 최소한으로 수집하며, 다음의 목적으로만 활용합니다.
                    <JoinRuleNumber>가. 회원관리</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>회원 서비스 제공 및 본인 확인(14세 미만 아동의 경우 법정대리인 동의여부 확인)</li>
                    <JoinRuleNumber>나. 서비스 제공을 위한 계약 이행 및 정산</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>콘텐츠 제공, 요금 결제, 물품 배송, 리더 수익 정산</li>
                    <li style={{textIndent:"1em"}}>문의사항 처리</li>
                    <JoinRuleNumber>다. 서비스 개발 및 마케팅 활용</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}> 이용자의 관심 및 성향 추정에 따른 맞춤형 컨텐츠 추천, 신규 서비스 및 상품 개발, 이벤트 정보 및 광고성 정보 제공, 마케팅 프로모션, 접속 빈도 파악, 앱 버전</li>
                </JoinRuleContent>

                <JoinRuleNumber>2. 수집하는 개인정보의 항목 및 수집 방법</JoinRuleNumber>
                <JoinRuleContent style={{borderBottom: "none"}}>
                    회사는 이용자로부터 개인정보 수집 시에 동의 받은 개인정보 보유이〮용기간 및 법령에 따라 개인정보를 처리하고 보유합니다.
                </JoinRuleContent>
                <JoinRuleNumber>가. 각각의 개인정보 처리사항은 다음과 같습니다.</JoinRuleNumber>
                
                {/* 표3 */}
                <GrayBoxContainer>
                  <GrayBox style={{width: "280px"}}>목차</GrayBox>
                  <GrayBox style={{width: "320px"}}>수집목적</GrayBox>
                  <GrayBox style={{width: "580px"}}>수집항목</GrayBox>
                </GrayBoxContainer>
                <BottomBoxContainer>
                    <BottomBoxes>
                        <Box3Bottom style={{width: "280px"}}>일반회원</Box3Bottom>
                        <Box3Bottom >
                            <Box3BottomColumn style={{width: "320px"}}>회원가입(이메일, 네이버)</Box3BottomColumn>
                            <Box3BottomColumn style={{width: "320px"}}>회원 정보 수정</Box3BottomColumn>
                            <Box3BottomColumn style={{width: "320px", borderBottom: "none"}}>회원 추가 정보</Box3BottomColumn>
                        </Box3Bottom>
                        <Box3Bottom >
                            <Box3BottomColumn style={{width: "580px"}}>로그인 정보 식별 값, 프로필 사진, 필명</Box3BottomColumn>
                            <Box3BottomColumn style={{width: "580px"}}>이름, 이메일, 비밀번호</Box3BottomColumn>
                            <Box3BottomColumn style={{width: "580px", borderBottom: "none"}}>프로필 이미지</Box3BottomColumn>
                        </Box3Bottom>
                    </BottomBoxes>
                </BottomBoxContainer>

                <JoinRuleNumber>나. 허위 정보 입력 시 회사의 조치</JoinRuleNumber>
                <JoinRuleContent style={{borderBottom: "none"}}>
                    <li style={{textIndent:"1em"}}>이용자는 자신의 정보에 대해 정확성 및 적법성을 보장해야 합니다. 만약 이를 위반하여 타인의 정보를 도용하는 등 각종 방법으로 허위 정보를 입력할 경우 회사는 해당 이용자를 관계법령에 따라 
                    <br/>신고할 수 있으며 강제 탈퇴를 시킬 수도 있습니다.</li>
                </JoinRuleContent>
                <JoinRuleNumber>다. 서비스 이용과정에서 수집될 수 있는 정보</JoinRuleNumber>
                <JoinRuleContent style={{borderBottom: "none"}}>
                    <li style={{textIndent:"1em"}}>이용자의 브라우저 종류 및 OS, 접속 IP 정보, 접속로그, 쿠키</li>
                    <li style={{textIndent:"1em"}}>콘텐츠 선택, 콘텐츠 기록</li>
                </JoinRuleContent>
                <JoinRuleNumber>라. 개인정보의 수집 방법</JoinRuleNumber>
                <JoinRuleContent>
                    <li style={{textIndent:"1em"}}>회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의하고 입력하는 경우</li>
                    <li style={{textIndent:"1em"}}>고객센터 상담과정에서 수집</li>
                    <li style={{textIndent:"1em"}}>온/오프라인 이벤트에서 진행되는 이벤트</li>
                    <li style={{textIndent:"1em"}}>웹 서비스를 통한 수집</li>
                    <li style={{textIndent:"1em"}}>‘쿠키(cookie)’에 의한 정보 수집</li>
                    <li style={{textIndent:"1em"}}>외부 업체 서비스 등으로 제3자로부터 제공  </li>
                </JoinRuleContent>

                <JoinRuleNumber>3. 만 14세 미만 아동의 개인정보 처리에 관한 사항</JoinRuleNumber>
                <JoinRuleContent>
                    <JoinRuleNumber>가. 회사는 만 14세 미만 아동에 대해 개인정보를 수집할 때 법정대리인의 동의를 얻어 해당 서비스 수행에 필요한 최소한의 개인정보를 수집합니다.</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>휴대폰 인증: 이름, 휴대전화번호, DI</li>
                    <JoinRuleNumber>나. 회사는 만 14세 미만 아동의 개인정보를 수집할 때에는 아동에게 법정대리인 성명, 연락처와 같이 최소한의 정보를 요구할 수 있으며, 다음의 방법으로 적법한 법정대리인이 동의하였는지를 확인합니다.</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>동의 내용을 게재한 인터넷 사이트에 법정대리인이 동의 여부를 표시하도록 하고 법정대리인의 휴대전화 본인인증을 통해 본인 여부를 확인하는 방법</li>
                </JoinRuleContent>

                <JoinRuleNumber>4. 개인정보의 보유•이용기간 및 파기</JoinRuleNumber>
                <JoinRuleContent>
                    <JoinRuleNumber>가. 회사는 개인정보 처리목적 달성, 이용자의 서비스 해지 요청이 있을 경우 지체없이 해당 개인정보를 파기합니다. 각각의 개인정보 처리 및 보유기간은 다음과 같습니다.</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>회원 관리, 서비스 개발 및 마케팅 활용: 회원 탈퇴 시까지</li>
                    <li style={{textIndent:"1em"}}>서비스 제공을 위한 계약 이행 및 정산: 재화•서비스 공급완료 및 요금결제정산 시까지</li>
                    <JoinRuleNumber>나. 단, 관계법령에 의한 일정기간 보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>계약 또는 청약철회 등에 관한 기록 (전자상거래법 :5년)</li>
                    <li style={{textIndent:"1em"}}>대금결제 및 재화 등의 공급에 관한 기록 (전자상거래법 5년)</li>
                    <li style={{textIndent:"1em"}}>소비자의 불만 또는 분쟁처리에 관한 기록 (전자상거래법 3년)</li>
                    <li style={{textIndent:"1em"}}>표시/광고에 관한 기록 (전자상거래법 6개월)</li>
                    <li style={{textIndent:"1em"}}>전자금융 거래에 관한 기록 (전자금융거래법 5년)</li>
                    <li style={{textIndent:"1em"}}>서비스 방문 기록 (통신비밀보호법 3개월)</li>
                    <JoinRuleNumber>다. 개인정보 파기방법은 아래와 같습니다.</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>전자적 파일 형태: 복구 및 재생할 수 없는 기술적 방법을 사용하여 안전하게 삭제</li>
                    <li style={{textIndent:"1em"}}>종이에 출력된 개인정보: 분쇄하거나 소각하여 파기</li>
                    <JoinRuleNumber>라. 개인정보 유효기간 제도</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>회사는 1년간 서비스를 이용하지 않은 이용자는 개인정보보호를 위하여 분리하여 저장, 관리합니다.</li>
                    <li style={{textIndent:"1em"}}>미이용자 개인정보 분리/저장시점 도래 1개월 이전에 이메일, SMS, App push 등 통지 가능한 방법으로 이용자에게 알립니다. 다만, 해당 통지 수단에 대한 정보가 부재 또는 오류인 경우에는 개인정보처리방침 내용으로 갈음하며, 로그인 할 때 파기 혹은 별도 분리저장에 관하여 사후 통보할 수 있습니다.</li>
                    <li style={{textIndent:"1em"}}>분리, 저장된 개인정보는 4년간 보관 후 지체없이 파기합니다.</li>
                    <li style={{textIndent:"1em"}}>휴면계정으로 전환을 원하지 않으시는 경우, 휴면계정 전환 전 서비스 로그인을 하시면 됩니다. 또한, 휴면계정으로 전환되었더라도 로그인을 하는 경우 이용자의 동의에 따라 휴면계정을 복원하여 정상적인 서비스를 이용할 수 있습니다.</li>
                </JoinRuleContent>

                <JoinRuleNumber>5. 개인정보의 제3자 제공 및 위탁 내용</JoinRuleNumber>
                <JoinRuleContent>
                    <JoinRuleNumber>가. 회사는 이용자의 개인정보를 사전 동의 없이 제3자에게 제공하지 않습니다.</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>이용자의 개인정보 제공이 필요한 경우, 사전에 이용자에게 ‘개인정보를 제공받는 자, 제공목적, 제공하는 개인정보 항목, 제공받는 개인정보의 보유 및 이용기간’을 고지하고 이에 대해 별도 동의를 구합니다.</li>
                    <li style={{textIndent:"1em"}}>다만. 관련 법령에서 달리 정하는 경우에는 고객의 동의 없이 개인정보를 제공하는 것이 가능합니다.</li>
                    <JoinRuleNumber>나. 회사는 이용자의 외부 제휴사 서비스 이용을 위해 개인정보를 제공하고 있으며, 편리하고 더 나은 서비스 제공을 위해 개인정보 처리 업무를 외부 전문 업체에 위탁하여 운영하고 있습니다.</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>위탁 체결 시 ‘개인정보 보호법’ 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적관〮리적 보호조치, 재 위탁 제한, 수탁자에 대한 관리감〮독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</li>
                    <li style={{textIndent:"1em"}}>위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개합니다.</li>
                    <li>제3자 제공 상세 정보</li>
                    <li>위탁 상세 정보</li>
                </JoinRuleContent>

                <JoinRuleNumber>6. 이용자 및 법정대리인의 권리와 그 행사방법</JoinRuleNumber>
                <JoinRuleContent>
                    <JoinRuleNumber>가. 이용자의 권리</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>이용자는 회사에 대해 언제든지 개인정보 열람정〮정삭〮제처〮리정지 요구 등의 권리를 행사할 수 있습니다.</li>
                    <li style={{textIndent:"1em"}}>단, 만 14세 미만 아동에 관한 개인정보 열람 등 요구는 법정대리인이 직접 해야 하며, 만 14세 이상의 미성년자인 이용자는 이용자의 개인정보에 관하여 미성년자 본인이 권리를 행사하거나 법정대리인을 통하여 권리를 행사할 수도 있습니다.</li>
                </JoinRuleContent>

                <JoinRuleNumber>7. 개인정보 자동수집 장치의 설치 운영 및 그 거부에 관한 사항</JoinRuleNumber>
                <JoinRuleContent>
                    회사는 개인화된 서비스를 제공하기 위하여 ‘쿠키(cookie)’ 및 ADID/IDFA를 수집할 수 있습니다.
                    <JoinRuleNumber>가. 쿠키(cookie)란?</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>회사의 웹사이트를 운영하는데 이용되는 서버가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC컴퓨터내의 하드디스크에 저장되기도 합니다.</li>
                    <JoinRuleNumber>나. 쿠키(Cookie) 사용 목적</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>이용자가의 취향과 관심분야를 파악하여 개인형 맞춤화 된 서비스를 제공하기 위해 사용됩니다.</li>
                    <li style={{textIndent:"1em"}}>이용자의 디바이스에 저장되어 있는 쿠키의 내용을 읽어 이용자의 환경설정을 유지하고 최적화된 서비스를 제공합니다.</li>
                    <JoinRuleNumber>다. 쿠키(Cookie) 설치운영 및 거부</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 
                    <br/>거부할 수도 있습니다.</li>
                    <li style={{textIndent:"1em"}}>다만, 쿠키의 저장을 거부할 경우에는 서비스 제공에 어려움이 있을 수 있습니다.</li>
                    <li style={{textIndent:"1em"}}>쿠키(Cookie) 설치 허용거부하는 방법</li>
                </JoinRuleContent>

                {/* 표4 */}
                <GrayBoxContainer>
                    <GrayBox style={{width: "280px"}}>브라우저</GrayBox>
                    <GrayBox style={{width: "900px"}}>방법</GrayBox>
                </GrayBoxContainer>
                <BottomBoxContainer>
                    <BottomBoxes>
                        <Box4Bottom style={{width: "280px"}}>
                            <Box4BottomColumn style={{height: "120px"}}>인터넷 익스플로러</Box4BottomColumn>
                            <Box4BottomColumn style={{height: "162px"}}>Microsoft Edge</Box4BottomColumn>
                            <Box4BottomColumn style={{height: "142px"}}>크롬 브라우저</Box4BottomColumn>
                            <Box4BottomColumn style={{height: "120px"}}>Safari</Box4BottomColumn>
                        </Box4Bottom>
                        <Box4Bottom style={{width: "901px"}}>
                            <Box4BottomColumn style={{height: "120px"}}>
                                <Box4BottomColumnContent>
                                    <li>Internet Explorer에서 도구 버튼을 선택한 다음 인터넷 옵션을 선택</li>
                                    <li>개인 정보 탭을 선택하고 설정에서 고급을 선택한 다음 쿠키의 차단 또는 허용을 선택</li>
                                </Box4BottomColumnContent>
                            </Box4BottomColumn>         
                            <Box4BottomColumn style={{height: "162px"}}>
                                <Box4BottomColumnContent>
                                    <li>Edge에서 오른쪽 상단 ‘····’ 표시를 클릭한 후, 설정을 클릭</li>
                                    <li>설정 페이지 좌측의 ‘개인정보, 검색 및 서비스’를 클릭 후 추적방지 섹션에서 ‘추적방지’ 여부 및 수준을 선택</li>
                                    <li>‘InPrivate를 검색할 때 항상 “엄격” 추적 방지 사용’ 여부 선택</li>
                                    <li>아래 개인정보 섹션에서 ‘추적 안함 요청 보내기’ 여부 선택</li>
                                </Box4BottomColumnContent>
                            </Box4BottomColumn>
                            <Box4BottomColumn style={{height: "142px"}}>
                                <Box4BottomColumnContent>
                                    <li>Chrome 오른쪽 상단 ‘ ⋮ ’ 표시(chrome 맞춤설정 및 제어)를 클릭한 후, 설정 표시 클릭</li>
                                    <li>설정 페이지 하단에 ‘고급 설정 표시’를 클릭하고 개인정보 섹션에서 콘텐츠 설정을 클릭</li>                            <li>Internet Explorer에서 도구 버튼을 선택한 다음 인터넷 옵션을 선택</li>
                                    <li>쿠키 섹션에서 ‘타사 쿠키 및 사이트 데이터 차단’의 체크박스를 선택</li>
                                </Box4BottomColumnContent>

                            </Box4BottomColumn>
                            <Box4BottomColumn style={{height: "120px"}}>
                                <Box4BottomColumnContent>
                                    <li> MacOS 상단 좌측 메뉴바에서 [Safari] -> [환경설정]을 선택</li>
                                    <li>[환경설정] 창에서 [보안]으로 이동하여 쿠키 허용여부 선택</li>
                                </Box4BottomColumnContent>

                            </Box4BottomColumn>
                        </Box4Bottom>
                    </BottomBoxes>

                </BottomBoxContainer>

                <JoinRuleNumber>8. 개인정보보호를 위한 기술적/관리적 관리</JoinRuleNumber>
                <JoinRuleContent>
                회사는 고객의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조 훼손되지 않도록 안전성 확보를 위하여 기술적, 관리적 대책을 강구하고 있습니다.
                    <JoinRuleNumber>가. 기술적 대책</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>이용자의 개인정보는 암호화된 통신구간을 이용하여 전송하고, 비밀번호 등 중요 정보는 암호화하여 보관하고 있습니다.</li>
                    <li style={{textIndent:"1em"}}>백신프로그램을 이용하여 컴퓨터 바이러스에 의해 피해를 방지하기 위한 조치를 취하고 있습니다.</li>
                    <li style={{textIndent:"1em"}}>해킹 등 외부 침입에 대비하여 취약점 분석 등을 이용하여 보안에 만전을 기하고 있습니다.</li>
                    <JoinRuleNumber>나. 관리적 대책</JoinRuleNumber>
                    <li style={{textIndent:"1em"}}>개인정보에 대한 접근권한을 최소한의 인원으로 제한하고 있습니다. 또한, 해당 직원에게 보안서약서와 정기적인 교육 및 캠페인을 통하여 정보유출을 사전에 방지하고 있습니다.</li>
                    <li style={{textIndent:"1em"}}>개인정보의 안전한 처리를 위한 내부 관리계획을 수립하였으며, 이에 대한 이행사항 및 직원의 준수여부를 감시하기 위한 내부절차를 마련하고 있습니다.</li>
                </JoinRuleContent>
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1180px;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
`;
const JoinRule = styled.div`
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
`;
const JoinRuleNumber = styled.div`
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    padding-top: 20px;
`;
const JoinRuleContent = styled.div`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(70, 70, 70, 1);
    // 구분선
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
`;
// 표1,2,3,4
const GrayBox = styled.div`
    height: 46px;
    background-color: rgba(230, 230, 230, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;
// 표3,4
const GrayBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
`
// 표 아래 밑줄 위함
const BottomBoxContainer = styled.div`                  
    border-bottom: 1px solid rgba(230, 230, 230, 1)
`;
// 표2
const Box2Bottom = styled.div`                           
    box-sizing: border-box;
    width: 1180px;
    height: 194px;
    border: 1px solid rgba(230, 230, 230, 1);
    color: rgba(70, 70, 70, 1);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    padding-left: 30px;    
    margin-bottom: 20px; 
`;
// 표1 흰색 박스 세 개
const Box1Bottom = styled.div`
    width: 393px;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(230, 230, 230, 1);
`;
// 표1 내부 콘텐츠
const InsideBoxContainer = styled.div`                  
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center; 
    width: 270px;
    margin: auto;
`;
// 표1,3,4 (한 개의 표 안에 여러 박스 행 나열 시 사용)
const BottomBoxes = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
    margin-bottom: 1px solid rgba(230, 230, 230, 1);
`;
// 표3 테두리, 열 나열
const Box3Bottom = styled.div`
    height: 124px;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid rgba(230, 230, 230, 1);
`;
// 높이 및 글씨체 설정
const Box3BottomColumn = styled.div`
    height: 42px;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;    
    color: rgba(70, 70, 70, 1);
`;
const Box4Bottom = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid rgba(230, 230, 230, 1);
`;
const Box4BottomColumn = styled.div`
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: column;
`;
// 표4 하단 오른쪽 콘텐츠 왼쪽정렬 및 글씨체 설정
const Box4BottomColumnContent = styled.p`
    width: 901px;
    display: flex;
    text-align: left;
    flex-direction: column;
    padding-left: 60px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: rgba(70, 70, 70, 1);
`