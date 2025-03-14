import * as React from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/privacypolicy.module.scss"



const PrivacyPolicy = () => {
    return(
        <Layout>
            <Seo title="プライバシーポリシー" description="一般社団法人甲府青年会議所 2025年度 | プライバシーポリシー" />
            <div className={style.subHeader}>
                <p>プライバシーポリシー</p>
            </div>
            <div className={style.contentWrap}>
                <p>一般社団法人甲府青年会議所(以下、(社)甲府青年会議所)は皆様からいただいた個人情報について、その重要性を認識し、個人情報の保護に関する法律および関連法令等を遵守するとともに、その適正な収集・利用・管理を図るため、 当団体のプライバシーを定め、 その実現に向けて以下の事項に取り組みます。</p>
                <p>
                    1. 個人情報の安全取り扱いに関するマニュアルを定めるとともに、個人情報管理責任者において適切に管理します。<br/>
                    2. 個人情報の収集にあたっては、利用目的を明らかにするとともに、その目的達成に必要な範囲内で、適正に管理し使用します。<br/>
                    3. 個人情報は、法令等により開示が義務付けられている場合を除き、本人の承諾なしに第三者に提供することはいたしません。<br/>
                    4. 個人情報の改ざん、不正なアク セス等を防止するため、必要な処置を講じます。<br/>
                    5. 個人情報の処理を団体外の業者等に委託する場合は、適正な委託先を選定するとともに、個人情報の保護に関する契約を取り交わします。<br/>
                    6. 当団体が保有する個人情報について、その情報をご提供いただいた本人から内容の確認や訂正等の申し出を受けたときは、本人確認等必要な手続を経たうえ、合理的な範囲で対処します。<br/>
                    7. 上記各項の内容を当団体会員等に周知せしめるとともに、必要な処置を継続的に見直し、その改善に努めます。なお、当団体は報道機関としての役割も担っており、法が適用されない報道の用に供する目的の情報については、このポリシーの対象となるものではありません。
                </p>
                
                <h3>「保有個人データ」の開示請求等の手続</h3>
                <p>当団体が保有する「個人データ」について、本人または代理人からデータの開示、訂正・追加・削除、利用の停止等の請求があったときは、個人情報取扱団体として、遅滞なくこれに対処いたします。</p>
                <h3>申し出の方法</h3>
                <p>安全かつ正確を期するため、申し出は原則として、下記「保有個人データ開示等請求」によるものとします。必要事項をご記入の上、ご本人であることが確認できる書類のコピーを添えて、申し出先までご郵送下さい。</p>
                <a href = "https://drive.google.com/file/d/1_7ZtjdJKuBrYpcnPoVg3PeZvRQttRXFn/view" target = "_blank">保有個人データ開示等請求書</a>
                <br/>
                <br/>
                <h3>申し出先</h3>
                <p>〒400‐0858<br/>
                山梨県甲府市相生 2 丁目 2 番 17 号商工会議所会館 3F
                </p>

                <p className={style.cap}>２０２２年０１月０１日一般社団法人甲府青年会議所</p>

            </div>
            
        </Layout>
    )
}

export default PrivacyPolicy