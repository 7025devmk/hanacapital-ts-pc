<script>
// PF_P06_p001 컨텐츠
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconMoney from '@/assets/images/icon/money.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconPerson from '@/assets/images/icon/person.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconHanacapitalSmall from '@/assets/images/icon/hanacapital-small.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconConsultation from '@/assets/images/icon/consultation.svg?component';
import IconCompleted from '@/assets/images/icon/completed.svg?component';

export default {
  components: {
    BasicHr,
    IconMoney,
    IconRate,
    IconDate,
    IconPerson,
    IconInterestRate,
    IconConsulting,
    IconSend,
    IconDeposit,
    IconCalculate,
    IconHanacapitalSmall,
    IconConsultation,
    IconCompleted,
  },
};
</script>

<template>
  <div>
    <div :class="$style['product-top']">
      <div :class="$style['product-top__contents']">
        <div :class="$style['product-top__head']">
          <h2 :class="$style['product-top__sub-text']">
            e임대주택론(임대보증금 담보대출)
          </h2>
          <p :class="$style['product-top__main-text']">
            임대주택의 임대보증금을 담보로<br />
            빠르고 간편하게 대출해드리는 금융서비스입니다
          </p>
        </div>

        <div :class="$style['product-top__image']">
          <img src="@/assets/images/contents/img-apt-loan.png" alt="" />
        </div>

        <div
          :class="[
            $style['product-detail'],
            $style['product-detail--main'],
            'row-margin-contents-small',
          ]"
        >
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconMoney />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">한도</div>
                <div :class="$style['product-detail__desc']">
                  <div>
                    최소 2천만원<br />
                    ~ 최대 5억원
                  </div>
                  <div class="text-body-3 font-weight-light row-margin-mini">
                    (임대보증금의<br />
                    최대 95% 이내)
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">
                  <div>
                    연 7.6% ~ 12.3%<br />
                    연체이자율 :<br />
                    약정이율 +3%
                  </div>
                  <div class="text-body-3 font-weight-light row-margin-mini">
                    (법정최고금리 연 20% 이내)
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">
                  <div>21개월 ~ 27개월</div>
                  <div class="text-body-3 font-weight-light row-margin-mini">
                    (임대차계약기간 이내)
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="wide-wrap row-margin-block">
      <div class="flex-box row-margin-contents-group">
        <div class="flex-box__cell">
          <div :class="$style['product-box']"></div>
        </div>
        <div class="flex-box__cell flex-box__cell--regular">
          <h3 class="text-big-2">상품안내</h3>
        </div>
      </div>

      <div>
        <div :class="$style['product-info']">
          <ul :class="$style['product-info__list']">
            <li :class="$style['product-info__item']">
              <div :class="$style['product-info__block']">
                <div :class="$style['product-info__head']">
                  <div :class="$style['product-info__icon']">
                    <IconPerson />
                  </div>
                  <div :class="$style['product-info__title']">대상</div>
                </div>
                <div :class="$style['product-info__contents']">
                  <div :class="$style['product-info__text']">
                    공공임대(LH, SH, 지방공사), 민영임대(부영건설 등) 거주(예정)
                    손님
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-info__item']">
              <div :class="$style['product-info__block']">
                <div :class="$style['product-info__head']">
                  <div :class="$style['product-info__icon']">
                    <IconInterestRate />
                  </div>
                  <div :class="$style['product-info__title']">한도</div>
                </div>
                <div :class="$style['product-info__contents']">
                  <div :class="$style['product-info__text']">
                    최소 2천만원 ~ 최대 5억원
                  </div>
                  <div :class="$style['product-info__sub']">
                    (임대보증금의 최대 95% 이내)
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-info__item']">
              <div :class="$style['product-info__block']">
                <div :class="$style['product-info__head']">
                  <div :class="$style['product-info__icon']">
                    <IconRate />
                  </div>
                  <div :class="$style['product-info__title']">금리</div>
                </div>
                <div :class="$style['product-info__contents']">
                  <div :class="$style['product-info__text']">
                    연 7.6% ~ 12.3% / 연체이자율 : 약정이율 + 3%
                  </div>
                  <div :class="$style['product-info__sub']">
                    (법정최고금리 연 20% 이내)
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-info__item']">
              <div :class="$style['product-info__block']">
                <div :class="$style['product-info__head']">
                  <div :class="$style['product-info__icon']">
                    <IconDate />
                  </div>
                  <div :class="$style['product-info__title']">기간</div>
                </div>
                <div :class="$style['product-info__contents']">
                  <div :class="$style['product-info__text']">21 ~ 27개월</div>
                  <div :class="$style['product-info__sub']">
                    (임대차계약기간 이내)
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <section class="row-margin-block-small">
          <div :class="[$style['step'], $style['step--horizontal']]">
            <ul :class="$style['step__list']">
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 1</div>
                    <p :class="$style['step__text']">
                      하나캐피탈 홈페이지 또는<br />
                      당사와 협약된 대출모집법인을 통하여<br />
                      <strong>대출상담을 신청</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconConsultation />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 2</div>
                    <p :class="$style['step__text']">
                      대출한도 확인<br />
                      및 대출 관련<br />
                      <strong>상담을 진행</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconConsulting />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 3</div>
                    <p :class="$style['step__text']">
                      대출 약정서를<br />
                      작성하고<br />
                      <strong>서류를 제출</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconCompleted />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 4</div>
                    <p :class="$style['step__text']">
                      신청하신 대출건의<br />
                      서류심사 후<br />
                      <strong>최종 결과를 통보</strong>하고<br />
                      <strong>채권양도를 통지</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconSend />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__badge']">STEP 5</div>
                    <p :class="$style['step__text']">
                      권리관계 등 확인 후<br />
                      <strong>대출금을</strong><br />
                      <strong>입금</strong>합니다.
                    </p>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconDeposit />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            상환방법
          </h3>
          <p class="text-title-2 font-weight-bold">만기일시상환</p>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            중도상환수수료
          </h3>
          <p class="text-title-2 font-weight-bold">
            대출실행일 기준 경과기간에 따라 차등 적용되며, 3년 경과 시 면제
          </p>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              'row-margin-item',
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'font-weight-bold',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']">-</div>
              <div :class="$style['basic-list__content']">
                1년 이상 : 중도상환원금 X 1% + 중도상환원금 X (중도상환수수료율
                - 1%) X 잔존기간/(대출기간 - 30일)
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'font-weight-bold',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']">-</div>
              <div :class="$style['basic-list__content']">
                1년 미만 : 중도상환원금 X (중도상환수수료율) X
                잔존기간/(대출기간 - 30일)
              </div>
            </li>
          </ul>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              'row-margin-item',
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-4',
                'font-weight-regular',
                'color-gray-secondary',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                잔존기간 : 30일 미만 상환 시 '대출 사용기간'을 30일로 간주
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-4',
                'font-weight-regular',
                'color-gray-secondary',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                중도상환수수료율 : 2%
              </div>
            </li>
          </ul>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            대출부대비용
          </h3>
          <p class="text-title-2 font-weight-bold">
            5천만원 초과 실행 시 인지세 발생
          </p>
          <p class="text-body-3 color-gray row-margin-small">
            (인지세는 하나캐피탈과 금융소비자가 50%씩 부담합니다.)
          </p>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              'row-margin-item',
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'font-weight-regular',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']">-</div>
              <div :class="$style['basic-list__content']">
                대출금액 5천만원 초과 1억원 이하 : 7만원
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'font-weight-regular',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']">-</div>
              <div :class="$style['basic-list__content']">
                대출금액 1억원 초과 10억원 이하 : 15만원
              </div>
            </li>
          </ul>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            연체이자율
          </h3>
          <p class="text-title-2 font-weight-bold">약정이율+3%</p>
          <p class="text-body-3 font-weight-bold color-gray row-margin-small">
            (법정최고금리 연 20% 이내)
          </p>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            이자부과시기
          </h3>
          <p class="text-title-2 font-weight-bold">매월 후취</p>
        </section>
        <section class="row-margin-contents">
          <h3
            class="text-body-3 font-weight-bold color-gray row-margin-item-medium"
          >
            제출서류
          </h3>
          <div :class="$style['contents-list']">
            <ol
              :class="[
                $style['contents-list__list'],
                $style['contents-list__list--quinary'],
              ]"
            >
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">1</div>
                  <div :class="$style['contents-list__title']">
                    대출약정서 Set
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__title']">인감증명서</div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">3</div>
                  <div :class="$style['contents-list__title']">신분증 사본</div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">4</div>
                  <div :class="$style['contents-list__title']">
                    자동이체결제 통장사본
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">5</div>
                  <div :class="$style['contents-list__title']">
                    임대차계약서 사본
                  </div>
                </div>
                <div
                  :class="[
                    $style['contents-list__depth-3'],
                    'row-margin-small',
                  ]"
                >
                  <p class="text-body-3 font-weight-light color-gray">
                    민영건설은 HUG(주택도시보증공사) 가입증 추가 첨부
                  </p>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">6</div>
                  <div :class="$style['contents-list__title']">
                    주민등록등/초본
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">7</div>
                  <div :class="$style['contents-list__title']">
                    금융거래확인서
                  </div>
                </div>
                <div
                  :class="[
                    $style['contents-list__depth-3'],
                    'row-margin-small',
                  ]"
                >
                  <p class="text-body-3 font-weight-light color-gray">
                    대환대출 시
                  </p>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">8</div>
                  <div :class="$style['contents-list__title']">
                    소득증빙서류 등
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            채권보전
          </h3>
          <p class="text-title-2 font-weight-bold">
            임대보증금 반환 채권에 대한 채원양수도 계약
          </p>
        </section>
        <section class="row-margin-contents">
          <h3 class="text-body-3 font-weight-bold color-gray row-margin-item">
            유의사항
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--medium'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-regular',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                계약을 체결하기 전에 자세한 내용은 상품설명서와 약관을
                읽어보시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-bold',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상환능력에 비해 대출금이 과도할 경우 귀하의 신용등급 또는
                개인신용평점이 하락할 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-bold',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수
                있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-bold',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가
                발생할 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-regular',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
                제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-regular',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
                설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-regular',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은
                홈페이지에서 확인하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-regular',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융소비자의 개인신용평점에 따라 대출한도 및 금리가 차등
                적용됩니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-1',
                'font-weight-regular',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                담보 물건, 담보종류 등에 따라 대출조건이 차등 적용되며, 담보물이
                부적합할 경우 대출이 제한될 수 있습니다.
              </div>
            </li>
          </ul>
        </section>
      </div>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-388 (2023.10.16 ~ 2024.10.15)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제2023-C1h-11550호 (2023.10.16 ~ 2024.10.15)
          </div>
        </li>
      </ul>

      <BasicHr
        theme="tertiary"
        className="row-margin-block row-margin-bottom-none"
      />

      <div
        :class="[
          $style['icon-list'],
          $style['icon-list--wrap'],
          'row-margin-container-medium',
        ]"
      >
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']">
                <IconCalculate />
              </span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']">월 납입금 계산</span>
                <span :class="$style['icon-list__title']">대출계산기</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div
                :class="[
                  $style['icon-list__icon'],
                  $style['icon-list__icon-secondary'],
                ]"
              >
                <IconHanacapitalSmall />
              </div>
              <div :class="$style['icon-list__content']">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <div :class="$style['icon-list__text']">
                      모바일 앱에서 편하게 이용해요
                    </div>
                    <div :class="$style['icon-list__title']">앱 설치하기</div>
                  </div>
                  <div class="flex-box__cell flex-box__cell--large">
                    <img
                      src="@/assets/images/contents/qr-install.png"
                      alt=""
                      class="display-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P06_p001_contents.scss';
</style>
