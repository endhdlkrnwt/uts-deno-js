interface ISql {
    [index : string] : string;
}

const TSql = {} as ISql;
TSql['KtgFindAll'] = "select * from tb_kategori;";
TSql['KtgFindByKode'] = "select * from tb_kategori where kode = $1;";
TSql['KtgFindInKode'] = "select * from tb_kategori where kode in ($1, $2, $3);";

export default TSql ;