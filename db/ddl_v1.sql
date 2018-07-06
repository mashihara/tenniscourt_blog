-- table list
-- 1. MT_SYSTEM 運営者テーブル(予約サイト単位)
-- 2. MT_PLACE コートIDマスタ(同じ場所)
-- 3. MT_PLACE_INFO コート詳細情報(最寄り駅、ロッカーの有無、ブログ記事など)
-- 4. MT_COURT コートタイプごとのマスタ(同じ場所でも、インドアやコートの種類によって値段が違う)
-- 5. MT_COURT_FEE コート料金(曜日、時間毎)

-- 1. MT_SYSTEM 運営者テーブル(予約サイト単位)
-- drop table MT_SYSTEM;
create table
MT_SYSTEM (
section_id varchar(2) -- 首都圏:01
,system_id varchar(4)
,prefecture_id varchar(6) -- 都道府県ID：東京都13
,public_flg boolean -- 公営の場合true
,system_name varchar(100) --　システム名
,system_display_name	varchar(100) -- システム名はものすごい長いので短めの名前
,system_ryaku	varchar(4) -- システム名を2文字で
,reserve_url	varchar(100) -- URL
,reserve_phone varchar(20) -- 電話番号
,sys_insert_date timestamp -- insert日時
,sys_update_date timestamp -- update日時
,sys_del_flg boolean --　論理削除フラグ
,constraint mt_system_pk PRIMARY KEY (section_id,system_id)
);

-- 2. MT_PLACE 場所マスタ(同じ場所単位)
-- MT_PLACE 場所マスタ
-- 同一システムで管理される予約システムのうち、拠点ごとの単位で、place_idが付与される
-- section_id + system_id + place_id = display_idが付与される。
-- drop table MT_PLACE;
create table
MT_PLACE (
display_id varchar(10) -- section_id + system_id + place_id
,section_id varchar(2)
,system_id varchar(4)
,place_id varchar(4)
,place_name varchar(40) -- コート場所名(例：有明）
,place_url varchar(100) -- コート別にURLがある場合
,adress	varchar(100) -- 住所
,latitude decimal(8,5) -- 緯度
,longitude decimal(8,5) -- 軽度
,opne_hour boolean -- 営業時間
,changing_room_flg	boolean --更衣室有無フラグ
,shower_flg boolean -- シャワー有無フラグ
,toilet_flg boolean  -- トイレ有無フラグ
,parking_flg boolean -- 駐車場有無フラグ
,access	varchar(500) -- アクセス方法
,description varchar(1000) -- ブログのメイン説明
,author	varchar(20) -- ブログ作成者
,sys_insert_date timestamp
,sys_update_date timestamp
,sys_del_flg boolean
,constraint mt_place_pk PRIMARY KEY (display_id)
,constraint mt_system_fk FOREIGN KEY(section_id,system_id)
        REFERENCES MT_SYSTEM(section_id,system_id)
);


-- 4. MT_COURT コートタイプごとのマスタ(同じ場所でも、インドアやコートの種類によって値段が違う)
-- drop table MT_COURT;
-- 同一拠点内でさらにコートの料金が違う単位でコートIDが振られる
create table
MT_COURT (
display_id varchar(10)
,court_id varchar(3)
,court_number int --コートの面数
,court_name varchar(100) -- コートタイプの名前
,surface_type varchar(2) -- 下記参照
,sys_insert_date timestamp
,sys_update_date timestamp
,sys_del_flg boolean
,constraint mt_court_pk PRIMARY KEY (display_id,court_id)
,constraint mt_court_fk FOREIGN KEY (display_id)
        REFERENCES MT_PLACE(display_id)
);

-- surface_type
-- サーフェス（地面）のタイプIDを示す。
-- 01:砂入り人工芝
-- 02:グラスコート(芝)
-- 03:クレーコート(土)
-- 04:ハードコート(コンクリート)
-- 05:カーペット
-- 06:人口クレー（赤土）
-- 99:不明

-- 5. MT_PLACE_FEE コート料金(曜日、時間毎)
create table
MT_COURT_FEE (
display_id varchar(10) -- section_id + system_id + place_id
,court_id varchar(3)
,day_of_week int -- 曜日 1:sunday
,statr_time int -- 開始時間
,fee int -- 料金
,fee_unit_hour int -- 料金の単位時間（1時間いくら、2時間いくら、と単位に違いがある）
,per_person_flg boolean -- 通常はコート単位で料金が発生するが、場所によっては人ごとに発生する
,sys_insert_date timestamp
,sys_update_date timestamp
,sys_del_flg boolean
,constraint mt_court_fee_pk PRIMARY KEY (display_id,court_id,day_of_week,statr_time)
,constraint mt_court_fee_fk FOREIGN KEY (display_id,court_id)
        REFERENCES MT_COURT(display_id,court_id)
);
